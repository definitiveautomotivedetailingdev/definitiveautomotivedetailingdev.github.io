export interface CalendarEventRequest {
  calendarId: string;
  timeMin: string;
  timeMax: string;
}

export interface CalendarEvent {
  id: string;
  summary: string;
  start: { dateTime: string };
  end: { dateTime: string };
  status: string;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  vehicleDetails: string;
  additionalDetails: string;
}

export interface BookingData {
  calendarId: string;
  date: string;
  timeSlot: string;
  datetime: string;
  vehicleType: string;
  selectedServices: string[];
  customerInfo: CustomerInfo;
  status: string;
  timestamp: string;
}