import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rohit Sharma',
    position: 'Business Owner',
    quote: 'Hously Finserv made the entire loan process effortless. They offered me a competitive interest rate for my business loan that helped me expand operations.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Priya Patel',
    position: 'Teacher',
    quote: 'I was surprised by how quickly my home loan was approved. The staff was extremely helpful and guided me through each step of the process.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Vikram Mehta',
    position: 'IT Professional',
    quote: 'The balance transfer option saved me a significant amount on my existing home loan. Their calculators helped me understand exactly how much I would save.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/66.jpg',
  },
];

const HappyCustomers = () => {
  const [animatedCards, setAnimatedCards] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('happy-customers-section');
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        setTimeout(() => {
          const newAnimatedCards = {};
          testimonials.forEach((_, index) => {
            newAnimatedCards[index] = true;
          });
          setAnimatedCards(newAnimatedCards);
        }, 300);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="happy-customers-section"
      className="section-padding bg-gray-50 h-auto md:h-full" // Adjust height for mobile, keep full height for desktop
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Happy Customers</span>, Real Stories
          </h2>
          <p className="text-gray-600">
            Don't just take our word for it. See what our clients have to say about their experience with Hously Finserv.
          </p>
        </div>

        {/* Responsive Grid - Custom horizontal scroll on mobile */}
        <div className="relative">
          <div className="flex overflow-x-auto space-x-6 py-4 px-2 md:grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full md:w-auto transform transition-all duration-500 ${
                  animatedCards[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="glass-card rounded-xl p-6 hover-scale" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-teal-400"
                    />
                    <div className="ml-4">
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* For mobile, hide the slider icon */}
      <div className="md:hidden">
        <style>
          {`
            .overflow-x-auto::-webkit-scrollbar {
              display: none; /* Hide the scrollbar on mobile */
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default HappyCustomers;
