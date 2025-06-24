
import React from "react";
import BookingCalendar from "@/components/BookingCalendar";

const BookingCalendarSection = () => {
  return (
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
  );
};

export default BookingCalendarSection;
