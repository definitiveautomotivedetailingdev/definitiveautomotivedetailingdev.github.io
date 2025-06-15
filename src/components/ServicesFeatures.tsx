
import React from 'react';
import { Target, Award, Wrench, Users, Heart } from 'lucide-react';

const ServicesFeatures = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "UNMATCHED PRECISION",
      description: "We take pride in our meticulous attention to detail, ensuring every inch of your vehicle is cleaned, polished, & restored back to the day you bought it."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "PREMIUM QUALITY PRODUCTS",
      description: "Only the best, eco-friendly products are used to enhance & protect your vehicle's finish, ensuring a long-lasting Definitive! Difference."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "COMPREHENSIVE SERVICES",
      description: "From sectional detailings to ceramic coatings & paint protection, we offer a full range of services to meet all of your detailing needs!"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "EXPERIENCED TECHNICIANS",
      description: "Our skilled team of professionals brings years of expertise to each detailing session we provide, guaranteeing a Definitive! Difference & pleasant detailing experience for both you, & your vehicle."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "CUSTOMER SATISFACTION",
      description: "If you aren't happy, we aren't finished! Our team is committed to exceeding the expectations of our valued clients by providing personalized, tailored services, ensuring every vehicle is treated as if it were our Mother's vehicle. Whether you are our 1st client of the day or last client of the day, we assure every vehicle receives our undivided attention, leaving you blown away with our Definitive! Difference."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glassmorphism p-6 text-center card-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-definitive-red mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-orange-400 mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesFeatures;
