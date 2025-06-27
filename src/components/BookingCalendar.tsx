import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CalendarClock, MessageSquare, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addDays, setHours, setMinutes, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, addMonths, subMonths, getDay } from 'date-fns';

// Temporary toast function for production use
const toast = ({ title, description, variant }: { title: string; description: string; variant?: string }) => {
  console.log(`Toast [${variant || 'info'}]: ${title} - ${description}`);
  
  const toastDiv = document.createElement('div');
  toastDiv.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg text-white max-w-sm ${
    variant === 'destructive' ? 'bg-red-600' : 'bg-green-600'
  }`;
  toastDiv.innerHTML = `<strong>${title}</strong><br/>${description}`;
  document.body.appendChild(toastDiv);
  
  setTimeout(() => {
    toastDiv.remove();
  }, 5000);
};

// API Configuration
const API_CONFIG = {
  // Backend API endpoint that handles Google Calendar operations
  BACKEND_API_URL: import.meta.env.VITE_BACKEND_API_URL,
  // Google Calendar ID
  CALENDAR_ID: import.meta.env.VITE_CALENDAR_ID,
};

// Business hours configuration
const BUSINESS_HOURS = {
  start: 8,
  end: 22,
  slotDuration: 60, // minutes
  daysAhead: 180,
  closedDays: [0], // Sunday = 0, Monday = 1, etc.
  // Add specific closed dates if needed
  closedDates: [
    // '2024-12-25', // Christmas
    // '2024-01-01', // New Year
  ]
};

const vehicleTypes = [
  'Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible', 
  'Hatchback', 'Wagon', 'Van', 'Motorcycle', 'RV/Motorhome'
];

const additionalServices = [
  'Sectional Detailings',
  'Ceramic Coating',
  'Graphene Coatings',
  'OZone Generator',
  'Scented Steam Tank',
  'Headlight Restoration',
  'Crack & Chip Repair',
  'ATVs, Dirtbikes, Quads',
  'Watercrafts',
  'Dozers',
  'Paint Correction',
  'Paint Protection Film (PPF)',
  'Window Tinting',
  'Engine Bay Cleaning',
  'Leather Conditioning',
  'Odor Removal',
  'Pet Hair Removal',
  'Scratch Removal',
  'Wheel & Tire Detailing',
  'Chrome Polishing'
];

interface TimeSlot {
  time: string;
  datetime: Date;
  available: boolean;
  eventId?: string; // For tracking existing events
}

interface CalendarEvent {
  id: string;
  summary: string;
  start: { dateTime: string };
  end: { dateTime: string };
  status: string;
}

// Custom Calendar Component
const Calendar = ({ selected, onSelect, disabled }: {
  selected?: Date;
  onSelect: (date: Date | undefined) => void;
  disabled?: (date: Date) => boolean;
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  const startPadding = Array.from({ length: getDay(monthStart) }, (_, i) => null);
  const calendarDays = [...startPadding, ...monthDays];
  
  const goToPreviousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const goToNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  
  const isDayDisabled = (date: Date) => {
    if (disabled && disabled(date)) return true;
    if (BUSINESS_HOURS.closedDays.includes(date.getDay())) return true;
    
    const dateString = format(date, 'yyyy-MM-dd');
    return BUSINESS_HOURS.closedDates.includes(dateString);
  };
  
  return (
    <div className="p-4 bg-white rounded-lg border">
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={goToPreviousMonth}
          className="p-2"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <h3 className="text-lg font-semibold text-gray-800">
          {format(currentMonth, 'MMMM yyyy')}
        </h3>
        
        <Button
          variant="outline"
          size="sm"
          onClick={goToNextMonth}
          className="p-2"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((date, index) => {
          if (!date) {
            return <div key={index} className="p-2" />;
          }
          
          const isDisabled = isDayDisabled(date);
          const isSelected = selected && isSameDay(date, selected);
          const isTodayDate = isToday(date);
          const isCurrentMonth = isSameMonth(date, currentMonth);
          
          return (
            <Button
              key={date.toISOString()}
              variant={isSelected ? "default" : "ghost"}
              size="sm"
              onClick={() => !isDisabled && onSelect(date)}
              disabled={isDisabled}
              className={`
                p-2 h-10 w-full text-sm
                ${!isCurrentMonth ? 'text-gray-500' : 'text-white'}
                ${isTodayDate ? 'ring-2 ring-blue-500' : ''}
                ${isSelected ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-800 hover:bg-gray-700'}
                ${isDisabled ? 'opacity-30 cursor-not-allowed' : ''}
              `}
            >
              {format(date, 'd')}
            </Button>
          );
        })}
      </div>
      
      <div className="mt-4 text-xs text-gray-500 space-y-1">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-600 rounded"></div>
          <span>Selected date</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 ring-2 ring-blue-500 rounded"></div>
          <span>Today</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-300 rounded"></div>
          <span>Unavailable</span>
        </div>
      </div>
    </div>
  );
};

const BookingCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string>('');
  const [vehicleType, setVehicleType] = useState<string>('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleDetails: '',
    additionalDetails: ''
  });

  // API helper functions
  const fetchCalendarEvents = async (selectedDate: Date): Promise<CalendarEvent[]> => {
    const startOfDay = new Date(selectedDate);
    startOfDay.setHours(0, 0, 0, 0);
    
    const endOfDay = new Date(selectedDate);
    endOfDay.setHours(23, 59, 59, 999);

    const response = await fetch(`${API_CONFIG.BACKEND_API_URL}/calendar/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        calendarId: API_CONFIG.CALENDAR_ID,
        timeMin: startOfDay.toISOString(),
        timeMax: endOfDay.toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch calendar events: ${response.statusText}`);
    }

    const data = await response.json();
    return data.events || [];
  };

  const createPendingBooking = async (bookingData: any) => {
    const response = await fetch(`${API_CONFIG.BACKEND_API_URL}/calendar/bookings/create-pending`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...bookingData,
        calendarId: API_CONFIG.CALENDAR_ID,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to create booking: ${response.statusText}`);
    }

    return await response.json();
  };

  // Generate time slots for a given date
  const generateTimeSlots = (selectedDate: Date): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    const startHour = BUSINESS_HOURS.start;
    const endHour = BUSINESS_HOURS.end;
    
    if (BUSINESS_HOURS.closedDays.includes(selectedDate.getDay())) {
      return slots;
    }
    
    const dateString = format(selectedDate, 'yyyy-MM-dd');
    if (BUSINESS_HOURS.closedDates.includes(dateString)) {
      return slots;
    }
    
    for (let hour = startHour; hour < endHour; hour++) {
      const slotTime = setMinutes(setHours(selectedDate, hour), 0);
      const timeString = format(slotTime, 'h:mm a');
      
      slots.push({
        time: timeString,
        datetime: slotTime,
        available: true
      });
    }
    
    return slots;
  };

  // Load available time slots when date changes
  useEffect(() => {
    if (date) {
      loadAvailableSlots(date);
    }
  }, [date]);

  const loadAvailableSlots = async (selectedDate: Date) => {
    setIsLoadingSlots(true);
    setTimeSlot('');
    setApiError(null);
    
    try {
      const timeSlots = generateTimeSlots(selectedDate);
      
      if (timeSlots.length === 0) {
        setAvailableSlots([]);
        setIsLoadingSlots(false);
        return;
      }

      // Fetch events from your calendar
      const events = await fetchCalendarEvents(selectedDate);
      
      // Mark slots as unavailable if they conflict with existing events
      const updatedSlots = timeSlots.map(slot => {
        const isUnavailable = events.some((event: CalendarEvent) => {
          if (!event.start?.dateTime) return false;
          
          const eventStart = new Date(event.start.dateTime);
          const eventEnd = new Date(event.end?.dateTime || event.start.dateTime);
          
          const slotEnd = new Date(slot.datetime.getTime() + (BUSINESS_HOURS.slotDuration * 60 * 1000));
          
          // Check if slot overlaps with existing event
          return (slot.datetime < eventEnd && slotEnd > eventStart);
        });
        
        return {
          ...slot,
          available: !isUnavailable
        };
      });
      
      setAvailableSlots(updatedSlots);
      
    } catch (error) {
      console.error('Error loading calendar events:', error);
      setApiError('Unable to load calendar availability. Please try again or contact us directly.');
      
      // Show all slots as available with warning
      const timeSlots = generateTimeSlots(selectedDate);
      setAvailableSlots(timeSlots.map(slot => ({ ...slot, available: true })));
      
      toast({
        title: "Calendar Connection Issue",
        description: "Could not verify real-time availability. Please call to confirm your preferred time slot.",
        variant: "destructive"
      });
    } finally {
      setIsLoadingSlots(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot || !vehicleType) {
      toast({
        title: "Missing information",
        description: "Please select a date, time slot, and vehicle type",
        variant: "destructive"
      });
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing contact information",
        description: "Please fill in all required contact fields",
        variant: "destructive"
      });
      return;
    }

    // Validate the selected slot is still available
    const selectedSlot = availableSlots.find(slot => slot.time === timeSlot);
    if (!selectedSlot || !selectedSlot.available) {
      toast({
        title: "Time slot no longer available",
        description: "Please select a different time slot",
        variant: "destructive"
      });
      await loadAvailableSlots(date); // Refresh availability
      return;
    }

    setIsSubmitting(true);

    try {
      const bookingData = {
        date: format(date, 'yyyy-MM-dd'),
        timeSlot,
        datetime: selectedSlot.datetime.toISOString(),
        vehicleType,
        selectedServices,
        customerInfo: formData,
        status: 'pending', // Will be confirmed after phone consultation
        timestamp: new Date().toISOString()
      };
      
      // Create pending booking (this will create a calendar event marked as "PENDING CONFIRMATION")
      const result = await createPendingBooking(bookingData);
      
      toast({
        title: "Booking request submitted successfully!",
        description: `We'll contact you at ${formData.phone} within 24 hours to discuss your ${vehicleType} detailing needs and confirm your appointment on ${format(date, 'MMMM dd, yyyy')} at ${timeSlot}.`,
      });

      // Reset form
      setDate(undefined);
      setTimeSlot('');
      setVehicleType('');
      setSelectedServices([]);
      setAvailableSlots([]);
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicleDetails: '',
        additionalDetails: ''
      });

    } catch (error) {
      console.error('Error submitting booking:', error);
      
      toast({
        title: "Booking submission failed",
        description: "There was an issue submitting your booking request. Please try again or call us directly at [YOUR_PHONE_NUMBER].",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">Book Your Detailing Appointment</h1>
      
      {apiError && (
        <div className="mb-6 p-4 bg-red-900/20 border border-red-600/50 rounded-lg">
          <p className="text-red-400 text-sm">⚠️ {apiError}</p>
        </div>
      )}
      
      <div className="grid gap-8 md:grid-cols-2">
        <div className="glassmorphism p-6 animate-fade-in">
          <div className="flex items-center space-x-2 mb-4">
            <CalendarClock className="h-5 w-5 text-green-400" />
            <h3 className="text-xl font-medium text-white">Select Date & Time</h3>
          </div>
          
          <Calendar
            selected={date}
            onSelect={setDate}
            disabled={(date) => date < new Date() || date > addDays(new Date(), BUSINESS_HOURS.daysAhead)}
          />
          
          <div className="mt-6">
            <label className="block text-gray-300 mb-2">
              Select Time Slot
              {date && (
                <span className="text-sm text-gray-400 ml-2">
                  for {format(date, 'MMMM dd, yyyy')}
                </span>
              )}
            </label>
            
            {isLoadingSlots ? (
              <div className="flex items-center justify-center p-4 bg-gray-800 border border-gray-600 rounded-md">
                <Loader2 className="h-4 w-4 animate-spin mr-2 text-green-400" />
                <span className="text-gray-300">Loading real-time availability...</span>
              </div>
            ) : (
              <Select value={timeSlot} onValueChange={setTimeSlot} disabled={!date || availableSlots.length === 0}>
                <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                  <SelectValue placeholder={
                    !date 
                      ? "Select a date first" 
                      : availableSlots.length === 0 
                        ? "No slots available this day" 
                        : "Select a time slot"
                  } />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  {availableSlots.map(slot => (
                    <SelectItem 
                      key={slot.time} 
                      value={slot.time}
                      disabled={!slot.available}
                      className={`text-white ${!slot.available ? "opacity-50" : "hover:bg-gray-700"}`}
                    >
                      {slot.time} {!slot.available && "(Booked)"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
          
          <div className="mt-4">
            <label className="block text-gray-300 mb-2">Vehicle Type</label>
            <Select value={vehicleType} onValueChange={setVehicleType}>
              <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                <SelectValue placeholder="Select vehicle type" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                {vehicleTypes.map(type => (
                  <SelectItem key={type} value={type} className="text-white hover:bg-gray-700">{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-600/50 rounded-md">
            <p className="text-blue-400 text-sm">
              ℹ️ Availability shown is live from our calendar. Time slots update in real-time.
            </p>
          </div>
        </div>
        
        <div className="glassmorphism p-6 animate-fade-in animation-delay-100">
          <div className="flex items-center space-x-2 mb-4">
            <MessageSquare className="h-5 w-5 text-green-400" />
            <h3 className="text-xl font-medium text-white">Contact & Service Information</h3>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-1">Name *</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-gray-800 border-gray-600 text-white"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-1">Email *</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-gray-800 border-gray-600 text-white"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-gray-300 mb-1">Phone *</label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="bg-gray-800 border-gray-600 text-white"
              />
            </div>
            
            <div>
              <label htmlFor="vehicleDetails" className="block text-gray-300 mb-1">Vehicle Details *</label>
              <Input
                id="vehicleDetails"
                name="vehicleDetails"
                value={formData.vehicleDetails}
                onChange={handleInputChange}
                required
                className="bg-gray-800 border-gray-600 text-white"
                placeholder="e.g., 2020 BMW X5, Silver"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Additional Services (Optional)</label>
              <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto bg-gray-800 p-3 border border-gray-600 rounded">
                {additionalServices.map(service => (
                  <div key={service} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={service}
                      checked={selectedServices.includes(service)}
                      onChange={() => handleServiceToggle(service)}
                      className="rounded border-gray-600 bg-gray-700 text-green-600 focus:ring-green-500"
                    />
                    <label 
                      htmlFor={service} 
                      className="text-sm text-gray-300 cursor-pointer"
                    >
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="additionalDetails" className="block text-gray-300 mb-1">Additional Details</label>
              <Textarea
                id="additionalDetails"
                name="additionalDetails"
                rows={3}
                value={formData.additionalDetails}
                onChange={handleInputChange}
                className="bg-gray-800 border-gray-600 text-white"
                placeholder="Any specific requests, concerns, or special instructions for your vehicle"
              />
            </div>
            
            <div className="p-3 bg-yellow-900/20 border border-yellow-600/50 rounded-md">
              <p className="text-yellow-400 text-sm">
                📞 <strong>Next Steps:</strong> After submitting, we'll call you within 24 hours to discuss your detailing needs in detail and confirm your appointment.
              </p>
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting || !date || !timeSlot || !vehicleType}
              className="w-full bg-green-600 hover:bg-green-700 text-white disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting Request...
                </>
              ) : (
                'Request Booking Consultation'
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;