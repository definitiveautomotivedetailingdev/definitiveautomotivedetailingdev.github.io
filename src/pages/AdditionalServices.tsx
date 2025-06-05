
import React, { useEffect } from "react";
import { Sparkles, Shield, Droplets, Zap, Car, Wrench, Brush, Star } from "lucide-react";
import { Link } from "react-router-dom";

const AdditionalServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Paint Correction",
      description: "Multi-stage paint correction to remove swirl marks, scratches, and oxidation, restoring your vehicle's paint to showroom condition.",
      features: [
        "Single-stage correction",
        "Multi-stage correction",
        "Swirl mark removal",
        "Scratch removal",
        "Paint restoration"
      ],
      startingPrice: "$200"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Ceramic Coating",
      description: "Premium ceramic coating application providing long-lasting protection against UV rays, chemicals, and environmental contaminants.",
      features: [
        "5-year ceramic coating",
        "9H hardness protection",
        "Hydrophobic properties",
        "UV protection",
        "Enhanced gloss"
      ],
      startingPrice: "$500"
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Paint Protection Film",
      description: "Clear, self-healing film that protects your vehicle's paint from rock chips, scratches, and other road debris.",
      features: [
        "Self-healing technology",
        "10-year warranty",
        "Custom cut patterns",
        "Full front end coverage",
        "Invisible protection"
      ],
      startingPrice: "$800"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Headlight Restoration",
      description: "Professional restoration of cloudy, yellowed headlights to improve visibility and enhance your vehicle's appearance.",
      features: [
        "UV damage removal",
        "Clarity restoration",
        "Protective coating",
        "Improved visibility",
        "Enhanced safety"
      ],
      startingPrice: "$75"
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Engine Bay Detailing",
      description: "Thorough cleaning and protection of your engine bay, improving appearance and helping with maintenance accessibility.",
      features: [
        "Engine degreasing",
        "Component cleaning",
        "Plastic restoration",
        "Metal polishing",
        "Protective coating"
      ],
      startingPrice: "$100"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Trim Restoration",
      description: "Restore faded plastic trim and rubber seals to their original deep black finish with our specialized treatments.",
      features: [
        "Plastic trim restoration",
        "Rubber seal conditioning",
        "Long-lasting results",
        "UV protection",
        "Factory finish restoration"
      ],
      startingPrice: "$60"
    },
    {
      icon: <Brush className="h-8 w-8" />,
      title: "Interior Protection",
      description: "Comprehensive protection for leather, fabric, and plastic surfaces to maintain that new car feel and appearance.",
      features: [
        "Leather conditioning",
        "Fabric protection",
        "UV damage prevention",
        "Stain resistance",
        "Odor elimination"
      ],
      startingPrice: "$120"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Wheel & Tire Detailing",
      description: "Specialized cleaning and protection for wheels and tires, including ceramic coating options for long-lasting results.",
      features: [
        "Deep wheel cleaning",
        "Tire conditioning",
        "Brake dust removal",
        "Wheel protection coating",
        "Chrome polishing"
      ],
      startingPrice: "$80"
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
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Additional Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Specialized automotive detailing services to enhance and protect every aspect of your vehicle. 
              From paint correction to ceramic coatings, we offer premium solutions for discerning vehicle owners.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="glassmorphism p-8 card-hover animate-fade-in h-full flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-green-500 mb-4">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6 flex-grow">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-green-500 font-bold text-lg">
                      Starting at {service.startingPrice}
                    </span>
                  </div>
                  <Link
                    to="/booking"
                    className="w-full bg-transparent border border-green-500 text-green-500 hover:bg-green-500/10 font-medium py-2 px-6 rounded-lg transition-all duration-300 text-center block"
                  >
                    Book Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Additional Services?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional-grade products, expert techniques, and attention to detail that sets us apart
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-green-500 mb-4 flex justify-center">
                <Star className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Premium Products</h3>
              <p className="text-gray-300">
                We use only the highest quality products from trusted brands in the automotive detailing industry.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-green-500 mb-4 flex justify-center">
                <Shield className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Technicians</h3>
              <p className="text-gray-300">
                Our certified technicians have years of experience and ongoing training in the latest techniques.
              </p>
            </div>
            
            <div className="text-green-500 mb-4 flex justify-center">
              <Sparkles className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Satisfaction Guarantee</h3>
            <p className="text-gray-300">
              We stand behind our work with a satisfaction guarantee on all services performed.
            </p>
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
              Need a Custom Solution?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Every vehicle is unique. Contact us to discuss a custom service package tailored to your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Book Consultation
              </Link>
              <Link
                to="/packages-pricing"
                className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdditionalServices;
