
import React, { useEffect } from "react";
import BookingCalendar from "@/components/BookingCalendar";
import { Clock, CheckCircle, Car, MoveRight, Phone, Mail } from "lucide-react";

const Booking = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-definitive-gold mb-6 animate-fade-in">Book Your Detailing Appointment</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Ready to give your vehicle the care it deserves? Use our simple booking system to schedule your professional detailing service.
            </p>
          </div>
        </div>
      </section>
      
      {/* Booking Process */}
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
      
      {/* Booking Calendar */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-definitive-gold mb-2">Select Your Appointment</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose from our available slots and let us know about your vehicle and service preferences
            </p>
          </div>
          
          <BookingCalendar />
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-definitive-gold mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Common questions about our detailing services and booking process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How far in advance should I book?",
                answer: "We recommend booking at least 1-2 weeks in advance, especially during peak seasons (spring and summer). However, we often have same-week availability."
              },
              {
                question: "How long does a typical detailing service take?",
                answer: "Service time varies by package: basic wash (1-2 hours), full detail (4-6 hours), paint correction (6-8 hours), ceramic coating (1-2 days)."
              },
              {
                question: "Do I need to be present during the service?",
                answer: "No, you can drop off your vehicle and pick it up when convenient. We'll contact you when the service is complete."
              },
              {
                question: "What's included in your detailing packages?",
                answer: "Each package varies, but typically includes exterior wash, interior cleaning, tire shine, and window cleaning. Premium packages add paint correction, protection, and more."
              },
              {
                question: "Do you work on all vehicle types?",
                answer: "Yes, we detail all types of vehicles including cars, trucks, SUVs, motorcycles, and RVs. Each service is tailored to your specific vehicle."
              },
              {
                question: "What's your cancellation policy?",
                answer: "We require 24-48 hours notice for cancellations. Same-day cancellations may incur a fee. Rescheduling is always welcome with advance notice."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="glassmorphism p-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-medium text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Direct Contact */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-definitive-gold mb-4">Prefer to Call or Email?</h2>
                <p className="text-gray-300 mb-6">
                  If you have specific questions about our services or prefer to discuss your vehicle's needs directly, we're here to help.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-definitive-gold" />
                    <span className="text-white">(416) 275-1179</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-definitive-gold" />
                    <span className="text-white">definitiveautomotivedetailing@outlook.com</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-definitive-gold" />
                    <span className="text-white">8am to 10pm, 7 days a week</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-definitive-gold/20 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-definitive-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Free Consultations</h3>
                    <p className="text-gray-300">Discuss your vehicle's needs with our experts</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-definitive-gold/20 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-definitive-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Custom Packages</h3>
                    <p className="text-gray-300">Tailored services for your specific requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-definitive-gold/20 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-definitive-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Mobile Service</h3>
                    <p className="text-gray-300">We can come to your location for added convenience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Add Calendar component for the icons
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

export default Booking;
