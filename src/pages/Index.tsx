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
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    {
      name: "Mid-Size Trucks",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "2 Row SUV's",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "3 Row SUV's",
      image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Minivan's",
      image: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Full-Size Trucks",
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    },
    {
      name: "Semi Truck's",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
    },
    {
      name: "Fleet Detailing",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
