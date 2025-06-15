
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star } from 'lucide-react';

const ReviewsCarousel = () => {
  const reviews = [
    {
      id: 1,
      name: "John Smith",
      rating: 5,
      text: "Exceptional service! My car looks brand new after their detailing. The team was professional and thorough.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      rating: 5,
      text: "Outstanding work! They came to my location and transformed my vehicle. Highly recommend their mobile service.",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Mike Chen",
      rating: 5,
      text: "Best detailing service in the GTA! Amazing attention to detail and customer service. Will definitely use again.",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "Lisa Martinez",
      rating: 5,
      text: "Incredible results! My car's paint looks flawless after their paint correction service. Worth every penny.",
      date: "1 week ago"
    },
    {
      id: 5,
      name: "David Wilson",
      rating: 5,
      text: "Professional, reliable, and the quality is unmatched. My luxury car has never looked better!",
      date: "2 months ago"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">
            Quality you can see. Trust you can feel.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See what our satisfied customers have to say about our automotive detailing services
          </p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="glassmorphism p-6 h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm ml-2">{review.date}</span>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="border-t border-definitive-red/10 pt-4">
                    <p className="text-white font-medium">{review.name}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-definitive-red/20 hover:bg-definitive-red/10 text-white" />
          <CarouselNext className="border-definitive-red/20 hover:bg-definitive-red/10 text-white" />
        </Carousel>
        
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?sca_esv=503182be980b3154&rlz=1C1RXQR_enCA1110CA1110&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E0Xjb757onXXYRU6KdTIUsPut5dTlFl0X8c2IxkqbAZXBzNZ0T_O5bJ5UWiY9F5Ow2n7-r_kYYF9EJf4rFv39IymFQfMaayEuXKujp6_1hqycPGexRhLUTj3ZWL4ckh6r-gt6bA%3D&q=Definitive!+Automotive+Detailing+Reviews&sa=X&ved=2ahUKEwjOs4uVqdmNAxUCjYkEHZkdHH4Q0bkNegQIPRAE&biw=1920&bih=911"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-definitive-red hover:text-definitive-red-light transition-colors"
          >
            Read More Reviews on Google
            <Star className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
