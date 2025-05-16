import React from 'react';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-12">
          
          {/* Company Info */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-400 mb-6">
              Providing innovative financial solutions that empower individuals and businesses to achieve their dreams with ease.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links + Legal Policies */}
          <div className="sm:col-span-2 flex flex-col sm:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-teal-400">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-teal-400">About Us</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-teal-400">Loan Services</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-teal-400">Contact</Link></li>
              </ul>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-4">Legal & Policies</h3>
              <ul className="space-y-3">
                <li><Link to="/terms" className="text-gray-400 hover:text-teal-400">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-teal-400">Privacy Policy</Link></li>
                <li><Link to="/disclaimer" className="text-gray-400 hover:text-teal-400">Disclaimer</Link></li>
              </ul>
            </div>
          </div>

          {/* Support + Join Us */}
          <div className="sm:col-span-2 flex flex-col sm:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-3">
                <li><Link to="/faqs" className="text-gray-400 hover:text-teal-400">FAQs</Link></li>
                <li><Link to="/support" className="text-gray-400 hover:text-teal-400">Customer Support</Link></li>
                <li><Link to="/bank-partners" className="text-gray-400 hover:text-teal-400">Bank Partner Details</Link></li>
              </ul>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-4">Join Us</h3>
              <ul className="space-y-3">
                <li><Link to="/refer" className="text-gray-400 hover:text-teal-400">Refer & Earn</Link></li>
                <li><Link to="/partner" className="text-gray-400 hover:text-teal-400">Join as Business Partner</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Hously Finserv. All rights reserved.
            </div>
            <div className="flex space-x-4 md:justify-end text-sm">
              <Link to="/terms" className="text-gray-400 hover:text-teal-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-teal-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-teal-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
