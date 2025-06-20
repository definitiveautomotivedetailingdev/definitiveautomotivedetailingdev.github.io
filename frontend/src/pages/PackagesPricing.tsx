import React, { useEffect } from "react";
import { Check, Star, Car, Sparkles, Shield, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const PackagesPricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const packages = [
    {
      name: "Interior Detail",
      price: "$120",
      originalPrice: null,
      duration: "2-3 hours",
      description: "Complete interior cleaning and protection for a fresh, comfortable ride.",
      features: [
        "Deep vacuum of all surfaces",
        "Dashboard and console cleaning",
        "Door panel and trim cleaning",
        "Seat cleaning and conditioning",
        "Window cleaning (interior)",
        "Floor mat cleaning",
        "Air freshening treatment",
        "UV protection for plastic surfaces"
      ],
      popular: false,
      icon: <Car className="h-8 w-8" />
    },
    {
      name: "Exterior Detail",
      price: "$140",
      originalPrice: null,
      duration: "3-4 hours",
      description: "Professional exterior care to restore your vehicle's shine and protection.",
      features: [
        "Hand wash with premium soap",
        "Paint decontamination",
        "Clay bar treatment",
        "Tire and rim deep cleaning",
        "Window cleaning (exterior)",
        "Trim restoration",
        "Premium wax application",
        "Chrome and metal polishing"
      ],
      popular: false,
      icon: <Sparkles className="h-8 w-8" />
    },
    {
      name: "Interior + Exterior",
      price: "$230",
      originalPrice: "$260",
      duration: "5-6 hours",
      description: "Complete vehicle transformation with our most comprehensive package.",
      discount: "$30 Exclusive Discount",
      features: [
        "Everything from Interior Detail",
        "Everything from Exterior Detail",
        "Paint correction (single stage)",
        "Ceramic coating protection",
        "Engine bay cleaning",
        "Headlight restoration",
        "Complete interior protection",
        "6-month warranty coverage"
      ],
      popular: true,
      icon: <Shield className="h-8 w-8" />
    }
  ];

  const addOnServices = [
    { name: "Sectional Detailings", price: "Starting at $50" },
    { name: "Ceramic Coating", price: "Starting at $500" },
    { name: "Graphene Coatings", price: "Starting at $600" },
    { name: "OZone Generator", price: "Starting at $75" },
    { name: "Scented Steam Tank", price: "Starting at $60" },
    { name: "Headlight Restoration", price: "Starting at $75" },
    { name: "Crack & Chip Repair", price: "Starting at $80" },
    { name: "ATV's, Dirtbikes, Quad's", price: "Starting at $150" },
    { name: "Watercrafts", price: "Starting at $200" },
    { name: "Dozers", price: "Starting at $300" },
    { name: "Paint Correction", price: "Starting at $200" },
    { name: "Paint Protection Film (PPF)", price: "Starting at $800" },
    { name: "Window Tinting", price: "Starting at $250" },
    { name: "Engine Bay Cleaning", price: "Starting at $100" },
    { name: "Leather Conditioning", price: "Starting at $80" },
    { name: "Odor Removal", price: "Starting at $60" },
    { name: "Pet Hair Removal", price: "+$40" },
    { name: "Scratch Removal", price: "+$80" },
    { name: "Wheel & Tire Detailing", price: "Starting at $80" },
    { name: "Chrome Polishing", price: "Starting at $60" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-definitive-blue/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-definitive-gold mb-6 animate-fade-in">
              Packages & Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Professional automotive detailing packages designed to meet every need and budget. 
              Save $30 when you choose our comprehensive Interior + Exterior package!
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
                  pkg.popular ? 'border-definitive-blue/50 scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-definitive-blue text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-definitive-blue mb-4 flex justify-center">
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {pkg.originalPrice && (
                      <div className="text-lg text-gray-400 line-through">{pkg.originalPrice}</div>
                    )}
                    <div className="text-3xl font-bold text-definitive-blue">{pkg.price}</div>
                  </div>
                  {pkg.discount && (
                    <div className="text-orange-400 font-medium text-sm mb-2">{pkg.discount}</div>
                  )}
                  <div className="text-gray-400 text-sm">{pkg.duration}</div>
                </div>
                
                <p className="text-gray-300 text-center mb-6">{pkg.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-definitive-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/booking"
                  className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 flex items-center justify-center ${
                    pkg.popular
                      ? 'bg-definitive-blue hover:bg-definitive-blue-dark text-white btn-glow shadow-lg shadow-definitive-blue/30 hover:shadow-xl hover:shadow-definitive-blue/40 border border-definitive-blue-light/30 hover:border-definitive-blue-light/50'
                      : 'bg-transparent border-2 border-definitive-blue text-definitive-blue hover:bg-definitive-blue/10 shadow-lg shadow-definitive-blue/20 hover:shadow-xl hover:shadow-definitive-blue/30 hover:border-definitive-blue-light'
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
            <h2 className="text-3xl font-bold text-definitive-gold mb-4">Add-On Services</h2>
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
                  <span className="text-definitive-blue font-bold">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Updated to match home page */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-definitive-red/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-definitive-gold mb-4">Ready to Transform Your Vehicle?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Experience the difference professional automotive detailing makes. Book your appointment today and give your vehicle the care it deserves.
            </p>
            <div className="flex justify-center">
              <Link
                to="/booking"
                className="bg-definitive-red hover:bg-definitive-red-dark text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow shadow-lg shadow-definitive-red/30 hover:shadow-xl hover:shadow-definitive-red/40 border border-definitive-red-light/30 hover:border-definitive-red-light/50"
              >
                Book Now
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagesPricing;
