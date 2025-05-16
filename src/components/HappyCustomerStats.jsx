import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { FaUsers, FaCity, FaBuilding, FaRupeeSign } from 'react-icons/fa';

const stats = [
  {
    icon: <FaUsers className="text-[#0074d9] text-xl sm:text-2xl" />, // Uniform color
    label: 'Happy Customers',
    value: 150000
  },
  {
    icon: <FaRupeeSign className="text-[#0074d9] text-xl sm:text-2xl" />, // Uniform color
    label: 'Disbursed/Annum',
    value: 500000
  },
  {
    icon: <FaCity className="text-[#0074d9] text-xl sm:text-2xl" />, // Uniform color
    label: 'Cities Covered',
    value: 120
  },
  {
    icon: <FaBuilding className="text-[#0074d9] text-xl sm:text-2xl" />, // Uniform color
    label: 'Branches',
    value: 50
  },
  {
    icon: <FaBuilding className="text-[#0074d9] text-xl sm:text-2xl" />, // Uniform color
    label: 'Branches',
    value: 50
  },
  {
    icon: <FaBuilding className="text-[#0074d9] text-xl sm:text-2xl" />, // Uniform color
    label: 'Branches',
    value: 50
  },
  {
    icon: <FaCity className="text-[#0074d9] text-xl sm:text-2xl" />, // Uniform color
    label: 'Cities Covered',
    value: 120
  },
];

const HappyCustomerStats = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (container) {
        const scrollAmount = container.offsetWidth / 2;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex items-center justify-center bg-white">
      <div
        className="w-[100%] h-[8vh] bg-gray-100 rounded-xl shadow flex overflow-x-auto scrollbar-hide px-4"
        ref={scrollRef}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center justify-center flex-col flex-none w-1/2 sm:w-1/4 md:w-1/5 text-center space-y-2 mx-2"
          >
            <div className="flex items-center justify-center gap-2">
              {stat.icon}
              <p className="text-sm sm:text-base text-gray-700">{stat.label}</p>
            </div>
            <h3 className="text-sm sm:text-lg font-bold text-gray-900 mt-1">
              <CountUp end={stat.value} duration={2} separator="," />
              {stat.label.includes('₹') && '+'}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HappyCustomerStats;
