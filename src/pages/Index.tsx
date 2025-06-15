
import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ServicesFeatures from "@/components/ServicesFeatures";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { Link } from "react-router-dom";
import { Car, MoveRight } from "lucide-react";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const vehicleTypes = [
    {
      name: "Sedans/Coupes",
      image: "/lovable-uploads/ada582c7-709e-480e-8494-1461b602567c.png"
    },
    {
      name: "Mid-Size Trucks",
      image: "/lovable-uploads/5964f950-36a7-430c-a887-4eea91ad4973.png"
    },
    {
      name: "2 Row SUV's",
      image: "/lovable-uploads/62df2610-5e4e-4be9-9dc5-c154242e9c89.png"
    },
    {
      name: "3 Row SUV's",
      image: "/lovable-uploads/752a1366-6aea-49ad-be21-341fe7476d14.png"
    },
    {
      name: "Minivan's",
      image: "/lovable-uploads/8acfad30-aa90-4edd-b779-aafd43058584.png"
    },
    {
      name: "Full-Size Trucks",
      image: "/lovable-uploads/708f9e32-840d-46a4-aaa4-75ad2689e16f.png"
    },
    {
      name: "Semi Truck's",
      image: "/lovable-uploads/8dced82a-6a2c-48ee-a060-463c28764183.png"
    },
    {
      name: "Fleet Detailing",
      image: "/lovable-uploads/becfc2e3-b59f-4f86-afca-b9f6fc7b7c14.png"
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Services Features Section */}
      <ServicesFeatures />
      
      {/* Vehicle Selection Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Select Your Type of Vehicle to View Our Packages and Pricing
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicleTypes.map((vehicle, index) => (
              <Link
                key={index}
                to="/packages-pricing"
                className="group relative overflow-hidden rounded-lg card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] relative">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg bg-black/60 px-3 py-2 rounded backdrop-blur-sm">
                      {vehicle.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Reviews Carousel Section */}
      <ReviewsCarousel />
      
      {/* Why Definitive Automotive Detailing Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-8">
              Why Definitive Automotive Detailing is the GTA's Top Choice for Mobile Car Detailing Services
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Definitive Automotive Detailing is the GTA's best mobile car detailing business, offering unmatched convenience and quality. Their skilled team provides top-tier automotive detailing services at your doorstep, saving you time and effort. Moreover, they use premium products and advanced techniques to restore your vehicle's appearance, ensuring every detail is spotless. Whether you need an exterior polish or interior deep clean, their professional service meets all your car detailing needs.
              </p>
              <p>
                What sets Definitive Automotive Detailing apart is their commitment to customer satisfaction and convenience. Their mobile detailing service brings high-end care directly to you, wherever you are. Additionally, their expertise ensures that your vehicle receives the best treatment, from a thorough wash to a protective finish. Thanks to their attention to detail and exceptional service, Definitive Automotive Detailing has earned a reputation as the GTA's go-to choice for professional car care.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vehicle Types Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-400 mb-2">We Detail All Vehicle Types</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From luxury cars to commercial vehicles, we provide expert detailing for every type of vehicle
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: "Sedans", icon: <Car size={32} /> },
              { name: "SUVs", icon: <Car size={32} /> },
              { name: "Trucks", icon: <Car size={32} /> },
              { name: "Luxury Cars", icon: <Car size={32} /> }
            ].map((vehicle, index) => (
              <div 
                key={index}
                className="glassmorphism flex flex-col items-center justify-center py-8 px-4 text-center card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-definitive-red mb-4">
                  {vehicle.icon}
                </div>
                <h3 className="text-lg font-medium text-white">{vehicle.name}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/booking"
              className="inline-flex items-center bg-definitive-red hover:bg-definitive-red-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow"
            >
              Book Your Detail
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-definitive-red/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">Ready to Transform Your Vehicle?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Experience the difference professional automotive detailing makes. Book your appointment today and give your vehicle the care it deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-definitive-red hover:bg-definitive-red-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Book Now
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/packages-pricing"
                className="bg-transparent border border-definitive-red text-definitive-red hover:bg-definitive-red/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
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

export default Index;
