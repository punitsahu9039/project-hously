import React, { useEffect, useState, useRef } from 'react';
import Layout from '@/components/Layout';
import TrendingOffers from '@/components/TrendingOffers/TrendingOffers';
import { Button } from '@/components/ui/button';
import { ArrowRight, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // ✅ Replace next/router with this

const OffersPage = () => {
  const [showFilter, setShowFilter] = useState(false);
  const trendingRef = useRef(null);
  const navigate = useNavigate(); // ✅ React Router's hook

  useEffect(() => {
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

  const handleFilterClick = () => setShowFilter(true);
  const handleApplyNow = () => navigate('/apply'); // ✅ navigate instead of router.push
  const handleAvailNow = () => navigate('/offers/special-festival-offer');
  const handleStartReferring = () => navigate('/referral');
  const handleViewAllOffers = () => trendingRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Layout>
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-load opacity-0">
            <h1 className="text-4xl md:text-5xl font-bold font-glacial mb-6">Offers & Cashback</h1>
            <p className="text-xl font-glacial">Discover our latest offers and special promotions to save more on your loans.</p>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 animate-on-load opacity-0">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold font-glacial">Latest Offers</h2>
              <p className="text-gray-600 font-glacial">Exclusive deals updated this month</p>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 font-glacial flex items-center gap-2" onClick={handleFilterClick}>
                <Filter className="h-4 w-4" />
                Filter Offers
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-glacial" onClick={handleApplyNow}>
                Apply Now
              </Button>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-12 animate-on-load opacity-0" style={{ transitionDelay: '0.2s' }}>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full font-glacial">LIMITED TIME</span>
                <h3 className="text-xl font-bold mt-2 mb-1 font-glacial">Special Festival Season Offer</h3>
                <p className="text-gray-700 font-glacial">Zero processing fee on all home loans above ₹50 Lakhs till October 31st</p>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-glacial flex items-center gap-2 px-6" onClick={handleAvailNow}>
                Avail Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div ref={trendingRef}>
            <TrendingOffers />
          </div>

          <div className="mt-16 animate-on-load opacity-0" style={{ transitionDelay: '0.4s' }}>
            <div className="bg-gradient-to-r from-gold-100 to-white border border-gold-200 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-glacial">Referral Program</h3>
                  <p className="text-gray-700 mb-6 font-glacial">
                    Refer your friends and family to earn cashback rewards of up to ₹10,000 per successful referral.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5 mr-3">
                        <span className="text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 font-glacial">Earn ₹5,000 for home loan referrals</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5 mr-3">
                        <span className="text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 font-glacial">Earn ₹2,000 for property loan referrals</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5 mr-3">
                        <span className="text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 font-glacial">No limit on number of referrals</span>
                    </li>
                  </ul>
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-glacial" onClick={handleStartReferring}>
                    Start Referring
                  </Button>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-200 rounded-full opacity-20 animate-pulse-gentle"></div>
                    <div className="relative z-10 bg-gradient-to-r from-gold-500 to-gold-400 text-blue-900 rounded-full w-32 h-32 flex flex-col items-center justify-center transform transition-transform hover:scale-105 duration-300">
                      <span className="text-3xl font-bold font-glacial">₹10K</span>
                      <span className="text-sm font-medium mt-1 font-glacial">MAX REWARD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Optional: Add View All Offers Button
          <div className="text-center mt-12">
            <Button variant="outline" className="text-blue-600 border-blue-400 font-glacial" onClick={handleViewAllOffers}>
              View All Offers
            </Button>
          </div> */}
        </div>
      </div>

      {/* Filter Modal Placeholder */}
      {showFilter && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold font-glacial mb-4">Filter Offers</h3>
            <p className="font-glacial text-gray-600">Coming soon...</p>
            <div className="mt-4 text-right">
              <Button variant="outline" onClick={() => setShowFilter(false)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default OffersPage;
