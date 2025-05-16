  import React, { useState, useEffect } from 'react';
  import { ArrowRight, Tag, Percent, Check } from 'lucide-react';
  import { useNavigate } from 'react-router-dom';
  import { Button } from '@/components/ui/button';
  import { Card, CardContent } from '@/components/ui/card';

  const trendingOffers = [
    {
      title: 'Special Home Loan Offer',
      description: 'Interest rates starting at just 8.5%* p.a. for salaried individuals with minimal processing fees.',
      benefits: [
        'Rate of Interest starting at 8.5%* p.a.',
        'Processing fee of just 0.25%*',
        'Zero pre-payment charges',
        'Loan up to ₹10 Crore'
      ],
      tag: 'Limited Time',
      icon: 'percent',
      cta: 'Apply Now',
      popular: true
    },
    {
      title: 'Property Loan Cashback',
      description: 'Get up to ₹25,000 cashback on property loans above ₹50 Lakhs with doorstep document collection.',
      benefits: [
        'Cashback of up to ₹25,000',
        'Doorstep document collection',
        'Approval within 3 working days',
        'Flexible repayment options'
      ],
      tag: 'Cashback',
      icon: 'tag',
      cta: 'Claim Offer'
    },
    {
      title: 'Balance Transfer + Top-up',
      description: 'Transfer your existing home loan and get additional top-up loan at the same low interest rate.',
      benefits: [
        'Reduce your interest by up to 2%',
        'Top-up loan at same interest rate',
        'No processing fee on balance transfer',
        'Zero hidden charges'
      ],
      tag: 'Save More',
      icon: 'percent',
      cta: 'Calculate Savings'
    }
  ];

  const TrendingOffers = () => {
    const navigate = useNavigate();
    const [animatedCards, setAnimatedCards] = useState({});

    useEffect(() => {
      const handleScroll = () => {
        const section = document.getElementById('trending-offers-section');
        if (!section) return;

        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
          setTimeout(() => {
            const newAnimatedCards = {};
            trendingOffers.forEach((_, index) => {
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

    const handleApply = (offerTitle) => {
      navigate('/apply'); // Replace with actual form route
    };

    const handleViewAll = () => {
      navigate('/offers'); // Navigate to the full offers page
    };

    return (
      <section id="trending-offers-section" className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-2xl md:text-4xl font-bold font-glacial mb-3 md:mb-4">
              Trending <span className="text-gradient bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Loans & Offers</span>
            </h2>
            <p className="text-gray-600 font-glacial text-sm md:text-base">
              Check out our latest offers and trending loan products designed to provide you maximum value.
            </p>
          </div>

          {/* Responsive Grid - Custom horizontal scroll on mobile */}
          <div className="relative">
            <div className="offers-slider-container flex overflow-x-auto space-x-4 md:space-x-6 py-2 px-1 md:grid md:grid-cols-3 gap-6">
              {trendingOffers.map((offer, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-80 md:w-auto transform transition-all duration-500 ${
                    animatedCards[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  } ${offer.popular ? 'ring-2 ring-gold-500 ring-offset-2' : ''}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <Card>
                    <div className="h-1.5 bg-gradient-to-r from-blue-600 to-blue-400"></div>

                    {/* Tag Icon - Hidden on mobile */}
                    <div className="absolute top-4 right-4 hidden md:block">
                      <span className="inline-flex items-center py-1 px-3 rounded-full bg-white shadow-md text-sm font-medium text-blue-600 animate-pulse-gentle">
                        {offer.icon === 'tag' ? (
                          <Tag className="h-3.5 w-3.5 mr-1 text-blue-500" />
                        ) : (
                          <Percent className="h-3.5 w-3.5 mr-1 text-blue-500" />
                        )}
                        {offer.tag}
                      </span>
                    </div>

                    {/* Popular Ribbon */}
                    {offer.popular && (
                      <div className="absolute -top-1 -left-12 bg-gold-500 text-blue-900 px-12 py-1 transform rotate-315 font-medium text-xs font-glacial">
                        POPULAR
                      </div>
                    )}

                    <CardContent className="p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold font-glacial mb-2 md:mb-3">{offer.title}</h3>
                      <p className="text-sm text-gray-600 mb-4 md:mb-6 font-glacial">{offer.description}</p>

                      <ul className="space-y-2 mb-4 md:mb-8">
                        {offer.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-4 w-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-sm font-glacial">{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-glacial text-sm md:text-base"
                        onClick={() => handleApply(offer.title)}
                      >
                        {offer.cta}
                        <ArrowRight className="h-4 w-4 animate-slide-in-right" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* View All Offers Button */}
          {/* <div className="mt-8 md:mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-gray-600 mb-4 font-glacial text-sm md:text-base">
              Looking for more offers? Explore our complete collection of loan products.
            </p>
            <Button
              variant="outline"
              className="border-blue-500 text-blue-600 hover:bg-blue-50 font-glacial"
              onClick={handleViewAll}
            >
              View All Offers
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div> */}
        </div>
      </section>
    );
  };

  export default TrendingOffers;
