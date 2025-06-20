
import React, { useEffect } from "react";
import BookingHero from "@/components/booking/BookingHero";
import BookingSteps from "@/components/booking/BookingSteps";
import BookingCalendarSection from "@/components/booking/BookingCalendarSection";
import BookingFAQ from "@/components/booking/BookingFAQ";
import ContactSection from "@/components/booking/ContactSection";

const Booking = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <BookingHero />
      <BookingSteps />
      <BookingCalendarSection />
      <BookingFAQ />
      <ContactSection />
    </div>
  );
};

export default Booking;
