import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CalendarClock, MessageSquare } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from '@/hooks/use-toast';

const availableTimeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

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
  'ATV\'s, Dirtbikes, Quad\'s',
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

const BookingCalendar = () => {
  const location = useLocation();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string>('');
  const [vehicleType, setVehicleType] = useState<string>('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleDetails: '',
    additionalDetails: ''
  });

  // Handle preselected service from navigation
  useEffect(() => {
    if (location.state?.preselectedService) {
      const preselectedService = location.state.preselectedService;
      if (additionalServices.includes(preselectedService)) {
        setSelectedServices([preselectedService]);
      }
    }
  }, [location.state]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot || !vehicleType) {
      toast({
        title: "Missing information",
        description: "Please select a date, time slot, and vehicle type",
        variant: "destructive"
      });
      return;
    }

    // Here you would normally send the data to your backend
    console.log({
      date: date ? format(date, 'yyyy-MM-dd') : '',
      timeSlot,
      vehicleType,
      selectedServices,
      ...formData
    });

    toast({
      title: "Booking request submitted!",
      description: `We'll contact you soon to confirm your ${vehicleType} detailing on ${format(date, 'MMMM dd, yyyy')} at ${timeSlot}.`,
    });

    // Reset form
    setDate(undefined);
    setTimeSlot('');
    setVehicleType('');
    setSelectedServices([]);
    setFormData({
      name: '',
      email: '',
      phone: '',
      vehicleDetails: '',
      additionalDetails: ''
    });
  };

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="glassmorphism p-6 animate-fade-in">
        <div className="flex items-center space-x-2 mb-4">
          <CalendarClock className="h-5 w-5 text-psyco-green-DEFAULT" />
          <h3 className="text-xl font-medium">Select Date & Time</h3>
        </div>
        
        <div className="calendar-container pointer-events-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(date) => date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 6))}
            className="rounded-md border border-psyco-green-muted/50 bg-psyco-black-card"
          />
        </div>
        
        <div className="mt-6">
          <label className="block text-gray-300 mb-2">Select Time Slot</label>
          <Select value={timeSlot} onValueChange={setTimeSlot}>
            <SelectTrigger className="bg-psyco-black-DEFAULT border-psyco-green-muted/50">
              <SelectValue placeholder="Select a time slot" />
            </SelectTrigger>
            <SelectContent className="bg-psyco-black-light border-psyco-green-muted/50">
              {availableTimeSlots.map(time => (
                <SelectItem key={time} value={time}>{time}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="mt-4">
          <label className="block text-gray-300 mb-2">Vehicle Type</label>
          <Select value={vehicleType} onValueChange={setVehicleType}>
            <SelectTrigger className="bg-psyco-black-DEFAULT border-psyco-green-muted/50">
              <SelectValue placeholder="Select vehicle type" />
            </SelectTrigger>
            <SelectContent className="bg-psyco-black-light border-psyco-green-muted/50">
              {vehicleTypes.map(type => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="glassmorphism p-6 animate-fade-in animation-delay-100">
        <div className="flex items-center space-x-2 mb-4">
          <MessageSquare className="h-5 w-5 text-psyco-green-DEFAULT" />
          <h3 className="text-xl font-medium">Contact & Service Information</h3>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="bg-psyco-black-light border-psyco-green-muted/50"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="bg-psyco-black-light border-psyco-green-muted/50"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-gray-300 mb-1">Phone</label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="bg-psyco-black-light border-psyco-green-muted/50"
            />
          </div>
          
          <div>
            <label htmlFor="vehicleDetails" className="block text-gray-300 mb-1">Vehicle Details (Year, Make, Model)</label>
            <Input
              id="vehicleDetails"
              name="vehicleDetails"
              value={formData.vehicleDetails}
              onChange={handleInputChange}
              required
              className="bg-psyco-black-light border-psyco-green-muted/50"
              placeholder="e.g., 2020 BMW X5"
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">Additional Services</label>
            <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto">
              {additionalServices.map(service => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox
                    id={service}
                    checked={selectedServices.includes(service)}
                    onCheckedChange={() => handleServiceToggle(service)}
                    className="border-psyco-green-muted/50"
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
              className="bg-psyco-black-light border-psyco-green-muted/50"
              placeholder="Any specific requests or concerns about your vehicle"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-psyco-green-DEFAULT hover:bg-psyco-green-dark transition-colors"
          >
            Request Booking
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BookingCalendar;
