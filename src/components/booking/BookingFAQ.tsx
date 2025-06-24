
import React from "react";

const BookingFAQ = () => {
  const faqs = [
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
  ];

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-definitive-gold mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Common questions about our detailing services and booking process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
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
  );
};

export default BookingFAQ;
