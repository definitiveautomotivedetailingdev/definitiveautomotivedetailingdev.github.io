
import React, { useEffect } from "react";
import { Shield, Eye, Award, Heart } from "lucide-react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Integrity",
      description: "Integrity is the foundation of trust between Definitive! & those that choose us. Detailing sessions involve our trained professionals handling your valuable property, which is why we provide the highest level of honesty, transparency, & professionalism, establishing trust & credibility with our valued clients. Upholding integral principles, being transparent about the services provided, & ensuring that our client's vehicle is treated with respect & care throughout the entire detailing session is our top priority. Now that's Definitive!"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Attention to Detail",
      description: "In the automotive detailing industry, the smallest of details make the biggest of difference. Our attention to detail ensures that every aspect of your detailing session is carried out beyond your highest standard, resulting in a Definitive! quality detailing session that exceeds your expectations. Paying close attention to every detail ensures that all areas of your vehicle are restored back to the day it left the dealership! By prioritizing attention to detail, our team of car detailing professionals guarantee to meet, & even exceed your standards!"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality",
      description: "We emphasize our commitment to providing our valued clients with a Definitive! detailing session, every session. Using only the highest quality automotive detailing products, & top of the line, regularly cleaned & sanitized equipment, our team identifies & prioritizes your needs, & with a hawk eye for the Definitive! Difference, we don't stop until You are satisfied. Our quality detailing sessions often lead to increased referrals, returning clients, & an amazing 5 star Google business. We understand that your satisfaction is our success, which is why our team sincerely value's your loyalty."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Commitment",
      description: "Commitment to Our 4 pillars sets the foundation for success in this industry. With our commitment to redefining our clients satisfaction, we are re-assuring our valued clients with a Definitive! Difference, with every detailing session! By consistently delivering exceptional detailing sessions & going above & beyond for our clients, we assure a unique & memorable experience that sets us apart in the industry. Our team is committed to leaving a lasting, Definitive! impression for you & your vehicle. We recognize this not only attracts new clients, but also turns existing clients into loyal advocates for our business!"
    }
  ];

  return (
    <div className="pt-20">
      {/* Why Choose Us Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-definitive-gold mb-8">
              Why Choose Us?
            </h1>
            
            {/* Video Placeholder */}
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-psyco-black-light border-2 border-definitive-gold/20 rounded-lg flex items-center justify-center glassmorphism">
                <div className="text-center">
                  <div className="w-24 h-24 bg-definitive-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-definitive-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-gray-400">Video content will be placed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our 4 Pillars of Success Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-definitive-gold mb-4">Our 4 Pillars of Success!</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The core principles that drive our commitment to excellence and set us apart in the automotive detailing industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="glassmorphism p-8 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-green-500 mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-gray-300 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
