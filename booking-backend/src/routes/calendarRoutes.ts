import express from 'express';
import { getCalendarEvents, createPendingBooking, confirmBooking } from '../calendar';
import { CalendarEventRequest, BookingData } from '../types';

const router = express.Router();

// Log requests for debugging
router.use((req, res, next) => {
  console.log(`Calendar route: ${req.method} ${req.originalUrl}`);
  next();
});

router.post('/events', async (req, res) => {
  const { calendarId, timeMin, timeMax } = req.body as CalendarEventRequest;

  if (!calendarId || !timeMin || !timeMax) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const events = await getCalendarEvents(calendarId, timeMin, timeMax);
    res.status(200).json({ events });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

router.post('/bookings/create-pending', async (req, res) => {
  const bookingData = req.body as BookingData;

  if (!bookingData.calendarId || !bookingData.datetime || !bookingData.customerInfo) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const result = await createPendingBooking(bookingData.calendarId, bookingData);
    res.status(201).json({ eventId: result.eventId, status: 'pending' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

router.post('/bookings/confirm', async (req, res) => {
  const { eventId, calendarId, bookingData } = req.body;

  if (!eventId || !calendarId || !bookingData) {
    return res.status(400).json({ error: 'Missing eventId, calendarId, or bookingData' });
  }

  try {
    const result = await confirmBooking(eventId, calendarId, bookingData);
    res.status(200).json({ eventId: result.eventId, status: 'confirmed' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;