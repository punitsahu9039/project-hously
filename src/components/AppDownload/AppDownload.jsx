import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const AppDownloadSection = () => {
  return (
    <div className="w-full py-6 px-4 lg:px-20 bg-[#f9f9f9] font-['Glacial_Indifference']" id="download">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left w-full lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1c1c] mb-4">
            Available Across <span className="text-[#0074d9]">India</span>
          </h2>
          <p className="text-base text-gray-600 mb-6">
            Hously Finserv is now available in major cities across India, with our headquarters in Pune. Download our mobile app to access all our financial services on the go.
          </p>
        </div>

        {/* Right Content */}
        <div className="order-1 lg:order-2 w-full lg:w-1/2">
          <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4">
            {/* Live Pune Map */}
            <div className="w-full sm:w-1/2 h-48 sm:h-64 lg:h-80"> {/* Adjusted height for mobile */}
              <iframe
                title="Pune Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2528506707124!2d73.85674231540136!3d18.520430687406307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c08c0f9cf47d%3A0x5f74fb6a5d00c6cd!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1629134548126!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                style={{ border: "0", borderRadius: "16px" }}
              ></iframe>
            </div>

            {/* App Mockup */}
            <div className="w-full sm:w-1/2 max-w-xs flex justify-center">
              <div className="relative w-full h-[350px] sm:h-[450px]"> {/* Adjusted height for mobile */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-[32px] blur opacity-50"></div>
                <div className="relative bg-black rounded-[30px] w-full h-full p-3">
                  <div className="bg-white rounded-[24px] w-full h-full overflow-hidden">
                    <div className="bg-gradient-to-b from-blue-100 to-gray-100 w-full h-full flex flex-col">
                      <div className="bg-blue-600 text-white py-4 px-6">
                        <div className="text-xs pb-1">Hously Finserv</div>
                        <div className="text-sm font-semibold">Loan Dashboard</div>
                      </div>
                      <div className="p-4">
                        <div className="mb-4 bg-white rounded-lg p-3 shadow-sm">
                          <div className="text-xs text-gray-500">Loan Status</div>
                          <div className="text-sm font-bold">Approved</div>
                          <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                            <div className="w-3/4 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                        </div>
                        <div className="mb-4 bg-white rounded-lg p-3 shadow-sm">
                          <div className="text-xs text-gray-500">Next Payment</div>
                          <div className="text-sm font-bold">₹24,500</div>
                          <div className="text-xs">Due on 15 June 2023</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white rounded-lg p-3 shadow-sm">
                            <div className="text-xs text-gray-500">EMI</div>
                            <div className="text-sm font-bold">₹24,500</div>
                          </div>
                          <div className="bg-white rounded-lg p-3 shadow-sm">
                            <div className="text-xs text-gray-500">Tenure</div>
                            <div className="text-sm font-bold">18 Years</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadSection;
