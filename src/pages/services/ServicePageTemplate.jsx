import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Send, Calculator } from 'lucide-react';

const ServicePageTemplate = ({
  title,
  description,
  image,
  features,
  eligibility,
  documents
}) => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
              <p className="text-xl mb-8">{description}</p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-100 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <Send size={18} />
                  Apply Now
                </Button>

                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-100 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <Calculator size={18} />
                  Calculate EMI
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src={image} alt={title} className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gradient">Key Features</h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full gradient-primary text-white flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <span>✓</span>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gradient">Eligibility</h2>
              <ul className="space-y-4">
                {eligibility.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <span>{index + 1}</span>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gradient">Required Documents</h2>
              <ul className="space-y-4">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <span>•</span>
                    </div>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-6">Ready to take the next step towards your financial goals?</p>
            <Button size="lg" className="gradient-primary hover:scale-105 transition-all duration-300">
              Apply for {title} Now
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicePageTemplate;
