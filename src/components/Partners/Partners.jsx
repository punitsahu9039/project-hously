import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import partner logos
import HDFC from '../../assets/partners/hdfc.png';
import ICICI from '../../assets/partners/icici.png';
import SBI from '../../assets/partners/sbi.png';
import AXIS from '../../assets/partners/axis.png';
import KOTAK from '../../assets/partners/kotak.png';
import PNB from '../../assets/partners/pnb.png';
import BOB from '../../assets/partners/bob.png';
import UNION from '../../assets/partners/union.png';

const partnerLogos = [
  { name: 'HDFC Bank', logo: HDFC },
  { name: 'ICICI Bank', logo: ICICI },
  { name: 'State Bank of India', logo: SBI },
  { name: 'Axis Bank', logo: AXIS },
  { name: 'Kotak Mahindra Bank', logo: KOTAK },
  { name: 'Punjab National Bank', logo: PNB },
  { name: 'Bank of Baroda', logo: BOB },
  { name: 'Union Bank of India', logo: UNION },
];

const Partners = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding animate-fade-in-up" style={{ marginTop: "-40px" }}>
      <div className="container mx-auto px-2"> {/* Reduced horizontal padding */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-glacial">
            Our <span className="text-gradient">Partners</span>
          </h2>
          <p className="text-gray-600 font-glacial">
            We have partnered with India's leading banks and financial institutions to bring you the best loan products and interest rates.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="partner-logos py-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {partnerLogos.map((partner, index) => (
                <div
                  key={index}
                  style={{ width: "100px", margin: "auto" }}
                  className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center transition-all hover:shadow-md hover:-translate-y-1 duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-10 w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.01]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-glacial">Partner With Us</h3>
                <p className="text-white/80 mb-6 font-glacial">
                  Join our network of financial partners and help customers find the best financial solutions for their needs while growing your business.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-white">
                    <div className="h-5 w-5 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                      <span className="text-blue-900 text-xs">✓</span>
                    </div>
                    <span className="font-glacial">Expanded customer reach</span>
                  </li>
                  <li className="flex items-center text-white">
                    <div className="h-5 w-5 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                      <span className="text-blue-900 text-xs">✓</span>
                    </div>
                    <span className="font-glacial">Higher lead conversion rates</span>
                  </li>
                  <li className="flex items-center text-white">
                    <div className="h-5 w-5 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                      <span className="text-blue-900 text-xs">✓</span>
                    </div>
                    <span className="font-glacial">Co-branded marketing opportunities</span>
                  </li>
                </ul>
                <button
                  onClick={() => navigate('/partner-form')}
                  className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 rounded-lg hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 font-medium font-glacial"
                >
                  Become a Partner
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="hidden md:block relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-transparent z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt="Partnership"
                  className="h-full w-full object-cover transition-transform duration-10000 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden mt-8 flex flex-col gap-3">
          {/* Logos in 4 columns */}
          <div className="bg-white p-2 rounded-lg shadow-sm">
            <div className="grid grid-cols-4 gap-2">
              {partnerLogos.map((partner, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-6 w-full object-contain" // made logo smaller
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Full Detailed Description in Mobile View */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-4 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold mb-2 font-glacial">Partner With Us</h3>
            <p className="text-sm font-glacial mb-2">
              Join our network of financial partners and help customers find the best financial solutions for their needs while growing your business.
            </p>
            <ul className="text-sm mb-3 space-y-1">
              <li className="flex items-center"><span className="mr-2">✓</span> Expanded customer reach</li>
              <li className="flex items-center"><span className="mr-2">✓</span> Higher lead conversion rates</li>
              <li className="flex items-center"><span className="mr-2">✓</span> Co-branded marketing opportunities</li>
            </ul>
            <button
              onClick={() => navigate('/partner-form')}
              className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg text-sm flex items-center gap-1 font-glacial"
            >
              Become a Partner <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
