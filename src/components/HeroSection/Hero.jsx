import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowRight, X } from 'lucide-react';

const slides = [
  {
    title: 'Home Loan',
    description: 'Get personalized loan offers with minimal documentation and the lowest interest rates.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
    backgroundClass: 'bg-gradient-to-r from-[#0074d9]/80 to-black/70'
  },
  {
    title: 'Property Loan',
    description: 'Apply in minutes and get instant loan approval directly in your bank account.',
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80',
    backgroundClass: 'bg-gradient-to-r from-black/70 to-[#0074d9]/70'
  },
  {
    title: 'Balance Transfer',
    description: 'We’ve helped thousands meet their financial goals. Be the next success story.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    backgroundClass: 'bg-gradient-to-r from-[#0074d9]/60 to-black/80'
  },
  {
    title: 'Business Loan',
    description: 'Grow your business with collateral-free loans up to ₹50 Lakhs with quick approval',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    backgroundClass: 'bg-gradient-to-r from-black/70 to-[#0074d9]/70'
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [showMobileForm, setShowMobileForm] = useState(false);

  const goToNextSlide = () => setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  const goToPrevSlide = () => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitting(true);
    setTimeout(() => {
      setIsFormSubmitting(false);
      alert('Application submitted successfully! Our team will contact you shortly.');
      setShowMobileForm(false);
    }, 1500);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const LoanForm = () => (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-600 block mb-1 font-glacial">Full Name</label>
          <input type="text" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="text-sm text-gray-600 block mb-1 font-glacial">Phone Number</label>
          <input type="tel" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>
      <div>
        <label className="text-sm text-gray-600 block mb-1 font-glacial">Loan Type</label>
        <select required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Select loan type</option>
          <option>Home Loan</option>
          <option>Property Loan</option>
          <option>Balance Transfer</option>
          <option>Business Loan</option>
        </select>
      </div>
      <div>
        <label className="text-sm text-gray-600 block mb-1 font-glacial">Loan Amount</label>
        <input type="text" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <Button type="submit" variant="gradient" className="w-full font-glacial">
        {isFormSubmitting ? 'Processing...' : 'Submit Application'}
      </Button>
    </form>
  );

  return (
    <section className="relative pt-20 min-h-[80vh] sm:min-h-screen flex items-center">
      {slides.map((slide, index) => (
        <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-center sm:object-right-top" />
          <div className={`absolute inset-0 ${slide.backgroundClass}`}></div>
        </div>
      ))}

      <div className="container mx-auto px-4 z-10 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-white lg:pr-10 mt-10 lg:mt-0 relative">
            {slides.map((slide, index) => (
              <div key={index} className={`transition-all duration-700 transform ${index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0 absolute'}`}>
                {index === currentSlide && (
                  <>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm inline-block mb-4">Trusted by 10,000+ clients</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-glacial mb-6">{slide.title}</h1>
                    <p className="text-lg md:text-xl mb-6 max-w-lg">{slide.description}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <Button variant="3d-gold" size="xl" className="w-44 justify-center font-glacial rounded-full" onClick={() => document.querySelector('#loan-form')?.scrollIntoView({ behavior: 'smooth' })}>
                        Apply Now <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                      <Button variant="glass" size="xl" className="w-44 justify-center font-glacial rounded-full border-2" onClick={() => window.location.href = '/calculators/emi'}>
                        Calculate EMI <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                      <div className="block lg:hidden">
                        <Button variant="3d-gold" className="w-44 justify-center font-glacial rounded-full" onClick={() => setShowMobileForm(true)}>
                          Quick Apply
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/2 relative flex justify-center">
            <div id="loan-form" className="hidden lg:block w-full max-w-md glass-card rounded-xl overflow-hidden shadow-2xl">
              <div className="p-8">
                <h3 className="text-lg font-bold font-glacial mb-4">Quick Loan Application</h3>
                <LoanForm />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-2">
            <button onClick={goToPrevSlide} className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'}`}></button>
              ))}
            </div>
            <button onClick={goToNextSlide} className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {showMobileForm && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full relative p-6">
            <button className="absolute top-3 right-3 text-gray-600 hover:text-gray-900" onClick={() => setShowMobileForm(false)}>
              <X />
            </button>
            <h3 className="text-xl font-bold font-glacial mb-4">Quick Loan Application</h3>
            <LoanForm />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
