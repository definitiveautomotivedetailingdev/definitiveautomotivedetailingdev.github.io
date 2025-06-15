
import React from "react";
import { Clock, CheckCircle, Car, MoveRight, Phone } from "lucide-react";

// Custom Calendar component
const Calendar = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const BookingSteps = () => {
  const bookingSteps = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Select Date & Time",
      description: "Choose your preferred date and time from our availability calendar."
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Tell Us About Your Vehicle",
      description: "Provide details about your vehicle type and any specific services needed."
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Consultation Call",
      description: "Our team will contact you to discuss your detailing needs in detail."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Confirmation",
      description: "Receive your appointment confirmation and prepare for exceptional service."
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-definitive-gold mb-2">How Booking Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our simple four-step process makes scheduling your detailing service easy
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bookingSteps.map((step, index) => (
            <div
              key={index}
              className="glassmorphism p-6 text-center animate-fade-in relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-definitive-gold mb-4 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
              
              {index < bookingSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-definitive-gold/50">
                  <MoveRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;
