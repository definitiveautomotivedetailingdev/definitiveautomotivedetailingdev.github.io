import { google } from 'googleapis';
import { BookingData, CalendarEvent } from './types';

const SCOPES = ['https://www.googleapis.com/auth/calendar'];

let SERVICE_ACCOUNT_KEY;
try {
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
    throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY environment variable is not set');
  }
  // Decode Base64 string
  const decodedKey = Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_KEY, 'base64').toString('utf-8');
  SERVICE_ACCOUNT_KEY = JSON.parse(decodedKey);
  if (!SERVICE_ACCOUNT_KEY.client_email || !SERVICE_ACCOUNT_KEY.private_key) {
    throw new Error('Invalid GOOGLE_SERVICE_ACCOUNT_KEY: missing client_email or private_key');
  }
} catch (error) {
  console.error('Failed to parse GOOGLE_SERVICE_ACCOUNT_KEY:', error);
  throw new Error('Invalid service account key configuration');
}

const auth = new google.auth.JWT({
  email: SERVICE_ACCOUNT_KEY.client_email,
  key: SERVICE_ACCOUNT_KEY.private_key,
  scopes: SCOPES,
});

const calendar = google.calendar({ version: 'v3', auth });

export const getCalendarEvents = async (
  calendarId: string,
  timeMin: string,
  timeMax: string
): Promise<CalendarEvent[]> => {
  try {
    const response = await calendar.events.list({
      calendarId,
      timeMin,
      timeMax,
      singleEvents: true,
      orderBy: 'startTime',
    });

    const events = response.data.items || [];
    // Filter out events with "PENDING" in the summary
    return events
      .filter((event) => !event.summary?.includes('PENDING'))
      .map((event) => ({
        id: event.id || '',
        summary: event.summary || '',
        start: { dateTime: event.start?.dateTime || '' },
        end: { dateTime: event.end?.dateTime || '' },
        status: event.status || '',
      }));
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    throw new Error('Failed to fetch calendar events');
  }
};

export const createPendingBooking = async (
  calendarId: string,
  bookingData: BookingData
): Promise<{ eventId: string }> => {
  try {
    const event = {
      summary: `PENDING: ${bookingData.vehicleType} Detailing - ${bookingData.customerInfo.name}`,
      description: JSON.stringify({
        customerInfo: bookingData.customerInfo,
        vehicleType: bookingData.vehicleType,
        selectedServices: bookingData.selectedServices,
        status: bookingData.status,
        timestamp: bookingData.timestamp,
      }, null, 2),
      start: {
        dateTime: bookingData.datetime,
        timeZone: 'America/Toronto',
      },
      end: {
        dateTime: new Date(
          new Date(bookingData.datetime).getTime() + 60 * 60 * 1000 // 1-hour slot
        ).toISOString(),
        timeZone: 'America/Toronto',
      },
      status: 'tentative',
    };

    const response = await calendar.events.insert({
      calendarId,
      requestBody: event,
    });

    return { eventId: response.data.id || '' };
  } catch (error) {
    console.error('Error creating booking:', error);
    throw new Error('Failed to create booking');
  }
};

export const confirmBooking = async (
  eventId: string,
  calendarId: string,
  bookingData: Partial<BookingData>
): Promise<{ eventId: string }> => {
  try {
    // Fetch the existing event to preserve details
    const existingEvent = await calendar.events.get({
      calendarId,
      eventId,
    });

    // Update the event to remove "PENDING" and set status to confirmed
    const updatedEvent = {
      ...existingEvent.data,
      summary: existingEvent.data.summary?.replace('PENDING', 'CONFIRMED') || `CONFIRMED: ${bookingData.vehicleType} Detailing - ${bookingData.customerInfo?.name}`,
      status: 'confirmed',
      description: JSON.stringify({
        ...JSON.parse(existingEvent.data.description || '{}'),
        status: 'confirmed',
        timestamp: new Date().toISOString(), // Update timestamp
      }, null, 2),
    };

    const response = await calendar.events.update({
      calendarId,
      eventId,
      requestBody: updatedEvent,
    });

    return { eventId: response.data.id || '' };
  } catch (error) {
    console.error('Error confirming booking:', error);
    throw new Error('Failed to confirm booking');
  }
};