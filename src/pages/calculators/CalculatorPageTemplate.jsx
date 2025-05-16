
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { ArrowRight } from 'lucide-react';

const CalculatorPageTemplate = ({
  title,
  description,
  calculatorComponent
}) => {
  useEffect(() => {
    // Add animation when the page loads
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-load');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-fade-in-up');
          el.classList.remove('opacity-0');
        }, index * 200);
      });
    };
    
    setTimeout(animateElements, 100);
  }, []);

  return (
    <Layout>
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-load opacity-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-glacial">{title}</h1>
            <p className="text-xl font-glacial">{description}</p>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 animate-on-load opacity-0">
              {calculatorComponent}
            </div>
            
            <div className="animate-on-load opacity-0" style={{transitionDelay: '0.4s'}}>
              <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm">
                <h3 className="text-xl font-bold mb-4 font-glacial text-blue-800">Why Use Our Calculator?</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <span className="text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 font-glacial">Get accurate results instantly</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <span className="text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 font-glacial">Plan your finances better</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <span className="text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 font-glacial">Compare different loan scenarios</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <span className="text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 font-glacial">Transparency in all calculations</span>
                  </li>
                </ul>
                
                <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-5 rounded-lg text-white mt-8">
                  <h4 className="font-bold mb-2 font-glacial">Need Personalized Assistance?</h4>
                  <p className="text-sm mb-4 font-glacial">Our financial experts can help you understand your results and guide you through the loan process.</p>
                  <button className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium font-glacial">
                    Speak to an Advisor <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-bold mb-3 font-glacial">Other Calculators</h4>
                  <div className="space-y-2">
                    <a href="/calculators/emi" className="block p-2 hover:bg-blue-50 rounded transition-colors font-glacial">EMI Calculator</a>
                    <a href="/calculators/eligibility" className="block p-2 hover:bg-blue-50 rounded transition-colors font-glacial">Eligibility Calculator</a>
                    <a href="/calculators/balance-transfer" className="block p-2 hover:bg-blue-50 rounded transition-colors font-glacial">Balance Transfer Calculator</a>
                    <a href="/calculators/pre-payment" className="block p-2 hover:bg-blue-50 rounded transition-colors font-glacial">Pre-Payment Calculator</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CalculatorPageTemplate;
