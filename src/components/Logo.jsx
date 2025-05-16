
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="relative w-10 h-10 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0074d9] to-[#0074d9]/80"></div>
        <Home className="h-6 w-6 text-[#ffd700] z-10" />
      </div>
      <div>
        <span className="text-xl font-bold font-glacial">Hously</span>
        <span className="text-xl font-bold font-glacial text-[#0074d9]">Finserv</span>
      </div>
    </Link>
  );
};

export default Logo;
