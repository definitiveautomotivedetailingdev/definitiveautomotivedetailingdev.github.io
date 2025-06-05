
import React, { useEffect } from "react";
import { Check, Star, Car, Sparkles, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const PackagesPricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const packages = [
    {
      name: "Basic Wash & Wax",
      price: "$89",
      duration: "2-3 hours",
      description: "Perfect for regular maintenance and keeping your vehicle looking fresh.",
      features: [
        "Hand wash with premium soap",
        "Tire and rim cleaning",
        "Interior vacuum",
        "Dashboard and console wipe down",
        "Window cleaning (interior & exterior)",
        "Premium carnauba wax application"
      ],
      popular: false,
      icon: <Car className="h-8 w-8" />
    },
    {
      name: "Premium Detail",
      price: "$189",
      duration: "4-5 hours",
      description: "Comprehensive detailing service for the discerning vehicle owner.",
      features: [
        "Everything in Basic package",
        "Paint decontamination",
        "Clay bar treatment",
        "Single-stage paint correction",
        "Interior deep cleaning",
        "Leather conditioning",
        "Trim restoration",
        "6-month paint protection"
      ],
      popular: true,
      icon: <Sparkles className="h-8 w-8" />
    },
    {
      name: "Signature Detail",
      price: "$349",
      duration: "6-8 hours",
      description: "Our flagship service delivering showroom-quality results.",
      features: [
        "Everything in Premium package",
        "Multi-stage paint correction",
        "Ceramic coating application",
        "Engine bay detailing",
        "Complete interior protection",
        "Headlight restoration",
        "Chrome polishing",
        "1-year paint protection warranty"
      ],
      popular: false,
      icon: <Shield className="h-8 w-8" />
    }
  ];

  const addOnServices = [
    { name: "Ceramic Coating Upgrade", price: "+$150" },
    { name: "Engine Bay Detail", price: "+$75" },
    { name: "Headlight Restoration", price: "+$50" },
    { name: "Pet Hair Removal", price: "+$40" },
    { name: "Odor Elimination Treatment", price: "+$60" },
    { name: "Scratch Removal (minor)", price: "+$80" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-green-500/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Packages & Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Professional automotive detailing packages designed to meet every need and budget. 
              From basic maintenance to complete transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`glassmorphism p-8 card-hover animate-fade-in relative ${
                  pkg.popular ? 'border-green-500/50 scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-green-500 mb-4 flex justify-center">
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-green-500 mb-2">{pkg.price}</div>
                  <div className="text-gray-400 text-sm">{pkg.duration}</div>
                </div>
                
                <p className="text-gray-300 text-center mb-6">{pkg.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/booking"
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
                    pkg.popular
                      ? 'bg-green-500 hover:bg-green-600 text-white btn-glow'
                      : 'bg-transparent border border-green-500 text-green-500 hover:bg-green-500/10'
                  }`}
                >
                  Book This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Add-On Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Enhance any package with our additional services for a completely customized experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOnServices.map((service, index) => (
              <div 
                key={index}
                className="glassmorphism p-6 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-white">{service.name}</h3>
                  <span className="text-green-500 font-bold">{service.price}</span>
                </div>
              </div>
            ))}
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
              Ready to Transform Your Vehicle?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Book your appointment today and experience the difference professional detailing makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Book Appointment
              </Link>
              <Link
                to="/additional-services"
                className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                View Additional Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagesPricing;
