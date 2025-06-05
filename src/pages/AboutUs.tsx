
import React, { useEffect } from "react";
import { Award, Users, Clock, Shield, Star, Car } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { icon: <Car className="h-8 w-8" />, number: "5000+", label: "Vehicles Detailed" },
    { icon: <Star className="h-8 w-8" />, number: "15+", label: "Years Experience" },
    { icon: <Users className="h-8 w-8" />, number: "98%", label: "Customer Satisfaction" },
    { icon: <Award className="h-8 w-8" />, number: "50+", label: "Industry Awards" }
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "We never compromise on quality. Every vehicle receives the same meticulous attention to detail, regardless of size or service level."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Reliability",
      description: "We respect your time. Our appointments are scheduled efficiently, and we always deliver on our promises."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We listen to your needs and tailor our services to exceed your expectations."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Continuous Innovation",
      description: "We stay current with the latest products, techniques, and technology to provide you with the best possible results."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-green-500/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
                About Definitive Automotive Detailing
              </h1>
              <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
                Established in 2009, Definitive Automotive Detailing has been the trusted choice for 
                automotive enthusiasts and everyday drivers alike. We combine passion, expertise, 
                and premium products to deliver exceptional results.
              </p>
              <Link
                to="/booking"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow animate-fade-in animation-delay-200"
              >
                Experience the Difference
              </Link>
            </div>
            
            <div className="glassmorphism p-1 rounded-2xl animate-fade-in animation-delay-300">
              <img 
                src="/lovable-uploads/708f9e32-840d-46a4-aaa4-75ad2689e16f.png" 
                alt="Professional automotive detailing" 
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center glassmorphism p-6 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-green-500 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glassmorphism p-1 rounded-2xl">
              <img 
                src="/lovable-uploads/becfc2e3-b59f-4f86-afca-b9f6fc7b7c14.png" 
                alt="Our detailing facility" 
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  What started as a passion for automotive perfection has grown into one of the region's 
                  most trusted detailing services. Our founder, with over 15 years in the automotive industry, 
                  recognized the need for truly professional detailing services that go beyond a simple car wash.
                </p>
                <p>
                  Today, we operate from a state-of-the-art facility equipped with the latest tools and 
                  technology. Our team consists of certified technicians who share our commitment to excellence 
                  and continuous learning.
                </p>
                <p>
                  We've had the privilege of working on everything from daily drivers to exotic supercars, 
                  and we approach each vehicle with the same level of care and attention to detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do and ensure exceptional service for every customer
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="glassmorphism p-8 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-green-500 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering exceptional results for every vehicle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glassmorphism p-8 text-center card-hover">
              <div className="w-24 h-24 bg-green-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Master Detailers</h3>
              <p className="text-gray-300">
                Certified professionals with years of experience in paint correction, ceramic coatings, and premium detailing services.
              </p>
            </div>
            
            <div className="glassmorphism p-8 text-center card-hover">
              <div className="w-24 h-24 bg-green-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="h-12 w-12 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quality Specialists</h3>
              <p className="text-gray-300">
                Dedicated team members who ensure every vehicle meets our exacting standards before delivery to the customer.
              </p>
            </div>
            
            <div className="glassmorphism p-8 text-center card-hover">
              <div className="w-24 h-24 bg-green-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Star className="h-12 w-12 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Customer Care</h3>
              <p className="text-gray-300">
                Friendly staff committed to providing exceptional customer service from initial consultation to final delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-green-500/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="glassmorphism p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Experience the Definitive Difference?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied customers who trust us with their vehicles. 
              Book your appointment today and see why we're the definitive choice for automotive detailing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Book Your Appointment
              </Link>
              <Link
                to="/packages-pricing"
                className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                View Our Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
