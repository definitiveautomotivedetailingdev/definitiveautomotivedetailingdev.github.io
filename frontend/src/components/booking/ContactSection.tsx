
import React from "react";
import { Clock, CheckCircle, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
      <div className="max-w-7xl mx-auto">
        <div className="glassmorphism p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-definitive-gold mb-4">Prefer to Call or Email?</h2>
              <p className="text-gray-300 mb-6">
                If you have specific questions about our services or prefer to discuss your vehicle's needs directly, we're here to help.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-definitive-gold" />
                  <span className="text-white">(416) 275-1179</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-definitive-gold" />
                  <span className="text-white">definitiveautomotivedetailing@outlook.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-definitive-gold" />
                  <span className="text-white">8am to 10pm, 7 days a week</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-definitive-gold/20 p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-definitive-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Free Consultations</h3>
                  <p className="text-gray-300">Discuss your vehicle's needs with our experts</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-definitive-gold/20 p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-definitive-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Custom Packages</h3>
                  <p className="text-gray-300">Tailored services for your specific requirements</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-definitive-gold/20 p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-definitive-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Mobile Service</h3>
                  <p className="text-gray-300">We can come to your location for added convenience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
