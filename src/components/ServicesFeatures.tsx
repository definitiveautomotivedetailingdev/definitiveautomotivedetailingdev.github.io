
import React from 'react';
import { Target, Award, Wrench, Users, Heart } from 'lucide-react';

const ServicesFeatures = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "UNMATCHED PRECISION",
      description: "We take pride in our meticulous attention to detail, ensuring every inch of your vehicle is expertly cleaned, polished, and restored to its finest condition."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "PREMIUM QUALITY PRODUCTS",
      description: "Only the finest, eco-friendly products are used to enhance and protect your vehicle's finish, ensuring long-lasting results."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "COMPREHENSIVE SERVICES",
      description: "From exterior washes to interior deep cleans and paint correction, we offer a full range of services to meet all your vehicle detailing needs."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "EXPERIENCED TECHNICIANS",
      description: "Our skilled team of professionals brings years of expertise to each job, guaranteeing a flawless and thorough detailing experience."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "CUSTOMER SATISFACTION",
      description: "We are committed to exceeding our customers' expectations by providing personalized service and ensuring every vehicle leaves looking its absolute best."
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
