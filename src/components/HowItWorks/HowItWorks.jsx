import React, { useState, useEffect } from 'react';
import { Check, FileText, Search, CreditCard, Phone, MessageSquare } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Find Your Loan',
    color: 'bg-blue-500',
    detailedDescription: 'Compare different loan options based on interest rates, tenures, and eligibility criteria to find the perfect match for your financial needs.',
  },
  {
    icon: FileText,
    title: 'Apply Online',
    color: 'bg-blue-600',
    detailedDescription: 'Our streamlined application process takes just 5 minutes to complete. Upload documents directly for faster processing.',
  },
  {
    icon: Check,
    title: 'Get Approved',
    color: 'bg-blue-700',
    detailedDescription: 'Most applications are approved within 24 hours. Our AI-powered system pre-approves eligible applicants instantly.',
  },
  {
    icon: CreditCard,
    title: 'Receive Funds',
    color: 'bg-yellow-500',
    detailedDescription: 'Funds are typically disbursed within 48 hours of approval. Track your application status in real-time through our portal.',
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [animatedSteps, setAnimatedSteps] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      const section = document.getElementById('how-it-works-section');
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        setTimeout(() => {
          const newAnimatedSteps = {};
          steps.forEach((_, index) => {
            newAnimatedSteps[index] = true;
          });
          setAnimatedSteps(newAnimatedSteps);
        }, 300);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="how-it-works-section" className="px-4 py-8 sm:py-12">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold font-glacial mb-4">
            How It <span className="text-gradient bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Works</span>
          </h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {steps.map((step, index) => {
              const isActive = activeStep === index;

              return (
                <div
                  key={index}
                  className={`relative z-10 transform transition-all duration-500 ${animatedSteps[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={!isMobile ? () => setActiveStep(index) : undefined}
                  onMouseLeave={!isMobile ? () => setActiveStep(null) : undefined}
                  onClick={isMobile ? undefined : undefined}
                >
                  <div className={`flex flex-col items-center ${isMobile ? '' : 'transform transition-all duration-300 '}${isActive ? 'scale-105' : ''}`}>
                    <div className={`rounded-full flex items-center justify-center text-white shadow-lg mb-3 ${step.color} ${isMobile ? 'w-12 h-12' : 'w-16 h-16'} ${isActive ? 'animate-pulse-gentle' : ''}`}>
                      <step.icon className={`${isMobile ? 'h-5 w-5' : 'h-8 w-8'}`} />
                    </div>

                    <div className="text-center">
                      <h3 className={`font-bold font-glacial mb-2 ${isMobile ? 'text-sm' : 'text-xl'}`}>
                        Step {index + 1}: {step.title}
                      </h3>

                      {isMobile ? (
                        <p className="text-gray-600 text-xs font-glacial">
                          {step.detailedDescription}
                        </p>
                      ) : (
                        <div
                          className={`mt-4 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100 transition-all duration-300 overflow-hidden ${
                            isActive ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{
                            maxHeight: isActive ? '160px' : '0px',
                            transition: 'max-height 0.3s ease, opacity 0.3s ease',
                          }}
                        >
                          <p className="text-sm text-gray-600 font-glacial leading-snug">
                            {step.detailedDescription}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop-only Help Section */}
        <div className="mt-12 md:mt-16 glass-card p-6 md:p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-transparent border border-blue-100 animate-fade-in-up hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold font-glacial mb-4">Need Help with the Process?</h3>
              <p className="text-gray-600 mb-4 font-glacial">
                Our financial experts are available to guide you through every step of the loan application process. Get personalized assistance to make your loan journey smooth.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md flex items-center gap-2 font-glacial font-medium">
                  <Phone className="w-4 h-4" />
                  Schedule a Call
                </button>
                <button className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-2 font-glacial font-medium">
                  <MessageSquare className="w-4 h-4" />
                  Chat with Us
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex justify-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <div className="absolute inset-0 bg-blue-200 rounded-full opacity-20 animate-pulse-gentle"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-40 h-40 md:w-52 md:h-52 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
                      <span className="text-3xl text-white font-bold font-glacial">24/7</span>
                      <span className="text-lg text-white font-glacial mt-2">Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
