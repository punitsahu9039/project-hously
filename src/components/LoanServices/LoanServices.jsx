import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { 
  Home,
  Building,
  ArrowRight,
  CreditCard,
  Briefcase
} from 'lucide-react';

const loanServices = [
  {
    id: 'home-loan',
    title: 'Home Loan',
    description: 'Make your dream home a reality with our flexible home loan options with interest rates starting from 8.5%* p.a.',
    icon: Home,
    benefits: [
      'Loan amount up to ₹10 Crore',
      'Tenure up to 30 years',
      'Quick processing and disbursement',
      'Minimal documentation',
      'No hidden charges',
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80'
  },
  {
    id: 'property-loan',
    title: 'Property Loan',
    description: 'Leverage your property to get loans for renovations, education, marriage, or other financial needs.',
    icon: Building,
    benefits: [
      'Loan against residential or commercial property',
      'Lower interest rates compared to personal loans',
      'Flexible repayment options',
      'Overdraft facility available',
      'Tax benefits as applicable',
    ],
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80'
  },
  {
    id: 'balance-transfer',
    title: 'Balance Transfer',
    description: 'Transfer your existing loan to Hously Finserv and enjoy lower interest rates and better terms.',
    icon: CreditCard,
    benefits: [
      'Lower interest rates than your current loan',
      'Save up to ₹8 Lakhs* on your total interest payment',
      'Option to top-up your loan',
      'Simplified documentation',
      'No foreclosure charges',
    ],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 'business-loan',
    title: 'Business Loan',
    description: 'Grow your business with our collateral-free business loans with competitive interest rates.',
    icon: Briefcase,
    benefits: [
      'Loan amount up to ₹50 Lakhs',
      'No collateral required',
      'Approval within 24 hours',
      'Minimal documentation',
      'Flexible repayment options',
    ],
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
  },
];

const LoanServices = () => {
  const [activeTab, setActiveTab] = useState('home-loan');

  return (
    <section className="section-padding bg-gray-50 pt-4 sm:pt-10" style={{ marginTop: "-50px" }}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Loan Services</span>
          </h2>
          Explore our range of loan products designed to meet your financial needs with the best terms in the market.
        </div>

    {/* Mobile Dropdown Toggle with Animation */}
<div className="mb-6 sm:hidden relative" style={{ marginTop: "-50px" }}>
  <div className="relative w-full">
    <select
      className="w-full p-3 pr-10 text-sm rounded-lg border border-gray-300 shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 ease-in-out appearance-none"
      value={activeTab}
      onChange={(e) => setActiveTab(e.target.value)}
    >
      {loanServices.map((service) => (
        <option key={service.id} value={service.id}>
          {service.title}
        </option>
      ))}
    </select>
    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-500 transition-transform duration-300 ease-in-out transform peer-focus:rotate-180"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</div>

        <Tabs defaultValue="home-loan" value={activeTab} onValueChange={setActiveTab}>
          {/* Desktop Tabs */}
          <div className="hidden sm:flex justify-center mb-8">
            <TabsList className="bg-gray-100 p-1 flex-wrap justify-center gap-2 max-w-full overflow-x-auto rounded-xl">
              {loanServices.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="data-[state=active]:gradient-primary data-[state=active]:text-white py-2 px-4 rounded-full text-sm text-center flex items-center whitespace-nowrap"
                >
                  <service.icon className="h-4 w-4 mr-2" />
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {loanServices.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start relative">
                <div className="order-2 sm:order-1">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm sm:text-base">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm sm:text-base">
                        <div className="h-5 w-5 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3">
                          <ArrowRight className="h-3 w-3" />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4 flex-wrap">
                    <Button className="gradient-primary w-full sm:w-auto">Apply Now</Button>
                    <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
                  </div>
                </div>

                <div className="order-1 sm:order-2 w-full">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-blue-200 rounded-xl blur-md opacity-40 animate-pulse-gentle"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg object-cover w-full h-52 sm:h-80 relative z-10 sm:mt-6"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default LoanServices;
