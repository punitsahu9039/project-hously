
import React, { useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/HeroSection/Hero'
import Features from './components/Features/Features';
import LoanServices from './components/LoanServices/LoanServices';
import TrendingOffers from './components/TrendingOffers/TrendingOffers';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Partners from './components/Partners/Partners';
import AppDownload from './components/AppDownload/AppDownload';
import HappyCustomers from './components/HappyCustomers/HappyCustomers';
import LoanCalculators from './components/LoanCalculators/LoanCalculators';
import HappyCustomerStats from './components/HappyCustomerStats';

const Index = () => {
  // Add scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top <= windowHeight * 0.85) {
          el.classList.add('animate-fade-in-up');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Trigger once on load
    setTimeout(handleScroll, 500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <Layout>
      <Hero />
      <div className="animate-on-scroll">
      <HappyCustomerStats/>
      </div>
      <div className="animate-on-scroll">
        <Features />
      </div>
     
      <div className="animate-on-scroll">
        <LoanServices />
      </div>
      {/* <div className="animate-on-scroll">
        <LoanCalculators />
      </div> */}
      <div className='animate-on-scroll'>
        <LoanCalculators/>

      </div>
      <div className="animate-on-scroll">
        <TrendingOffers />
      </div>
      <div className="animate-on-scroll">
        <HowItWorks />
      </div>
      <div className="animate-on-scroll">
        <Partners />
      </div>
      <div className="animate-on-scroll">
        <AppDownload />
      </div>
      <div className="animate-on-scroll">
        <HappyCustomers/>
      </div>
    </Layout>
  );
};

export default Index;
