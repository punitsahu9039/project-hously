
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const NavbarMenu = ({ items }) => {
  return (
    <ul className="hidden lg:flex items-center space-x-8">
      {items.map((item, index) => (
        <li key={index} className="relative group">
          <Link
            to={item.url}
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            {item.title}
            {item.submenu && (
              <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180 duration-200" />
            )}
          </Link>
          
          {item.submenu && (
            <div className="absolute left-0 mt-2 w-64 rounded-lg shadow-lg py-2 bg-white z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
              {item.submenu.map((subItem, subIndex) => (
                <Link
                  key={subIndex}
                  to={subItem.url}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavbarMenu;
