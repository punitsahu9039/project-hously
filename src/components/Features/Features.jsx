import React from 'react';
import {
  Calculator,
  PiggyBank,
  BarChart,
  Clock,
  Shield,
  Award
} from 'lucide-react';

const features = [
  {
    icon: Calculator,
    title: 'Personalized Rates',
    description: 'Get personalized loan interest rates tailored to your profile and exact financial requirements.'
  },
  {
    icon: PiggyBank,
    title: 'Low Interest Rates',
    description: 'Enjoy competitive interest rates starting at just 8.5%* p.a. across all loan offerings.'
  },
  {
    icon: BarChart,
    title: 'Flexible Repayment',
    description: 'Select from various repayment tenures that match your monthly income and budget.'
  },
  {
    icon: Clock,
    title: 'Quick Approval',
    description: 'Get loan approvals in as little as 24 hours with minimal paperwork and quick KYC.'
  },
  {
    icon: Shield,
    title: 'Secure Process',
    description: 'Your application and data are protected with industry-leading encryption and safety protocols.'
  },
  {
    icon: Award,
    title: 'Expert Advisors',
    description: 'Get guidance from certified loan experts who simplify your borrowing experience.'
  }
];

const Features = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-glacial mb-4">
            Why Choose <span className="text-gradient bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Hously Finserv</span>
          </h2>
          <p className="text-gray-600 font-glacial">
            We offer tailored financial solutions backed by trusted advisors and secure systems to make your borrowing journey seamless.
          </p>
        </div>

        {/* Mobile and Tablet View - Slider with hidden scroll */}
        <div className="block lg:hidden">
          <div className="overflow-x-auto flex space-x-4 pb-4 hide-scrollbar">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="min-w-[90%] shrink-0 scroll-snap-start bg-white p-4 rounded-xl shadow-md flex space-x-4 mb-4"  /* Reduced padding and margin */
                >
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="max-w-xs">
                    <h3 className="text-lg font-semibold font-glacial mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm font-glacial leading-snug">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop View - Grid Layout */}
        <div className="hidden lg:grid grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md flex space-x-4 transition-transform duration-300 hover:scale-[1.03]"
              >
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-md">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-glacial mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm font-glacial leading-snug">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none;  /* Firefox */
          -ms-overflow-style: none;  /* Internet Explorer 10+ */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Safari and Chrome */
        }
      `}</style>
    </section>
  );
};

export default Features;
