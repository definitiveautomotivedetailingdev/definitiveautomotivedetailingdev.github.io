
import React, { useEffect, useRef } from 'react';
import { MoveRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      backgroundRef.current.style.transform = `translate(${x * -15}px, ${y * -15}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Video Background - Replace this src with your actual video file */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        {/* 
          TODO: Replace with your actual video file
          Example: <source src="/your-video-file.mp4" type="video/mp4" />
          For now, this will show a black background since no video is provided
        */}
        <source src="/home-page-video.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Background Elements */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 z-20 transition-transform duration-500 ease-out"
        style={{ willChange: 'transform' }}
      >
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-definitive-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-definitive-red/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-40">
        <div className="flex flex-col items-center">
          <div className="max-w-4xl text-center">
            {/* Brand Logo - Made much larger */}
            <div className="mb-8">
              <div className="flex justify-center mb-6">
                <img 
                  src="/lovable-uploads/b38643c2-7a0d-4cbb-b50e-41b841a27c05.png" 
                  alt="Definitive Automotive Detailing Logo" 
                  className="h-[32rem] w-auto object-contain" 
                />
              </div>
            </div>
            
            <div className="flex items-center justify-center mb-6">
              <div className="bg-definitive-red/20 text-definitive-red rounded-full px-4 py-1 text-sm font-medium inline-flex items-center">
                <Sparkles className="h-3.5 w-3.5 mr-1" />
                Experience Our Definitive! Difference
              </div>
            </div>
            
            <p className="text-xl text-gray-300 mb-8">
              At Definitive! Automotive Detailing, we take the upmost integrity in redefining the standard of an automotive detailing experience, while providing your vehicle with the Definitive Difference!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-definitive-red hover:bg-definitive-red-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Book Appointment
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
      </div>
    </div>
  );
};

export default HeroSection;
