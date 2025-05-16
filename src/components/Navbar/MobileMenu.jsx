
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, X } from 'lucide-react';

const MobileMenu = ({
  isOpen,
  items,
  toggleMenu
}) => {
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (title) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white z-50 shadow-lg rounded-t-3xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ maxHeight: '80vh', overflowY: 'auto' }}
    >
      <div className="flex justify-between items-center pt-4 px-6 pb-2">
        <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
        <button 
          onClick={toggleMenu} 
          className="p-2 rounded-full hover:bg-gray-100"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <nav className="px-6 pb-10 pt-4">
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="border-b border-gray-100 pb-2">
              {item.submenu ? (
                <>
                  <button
                    className="w-full flex justify-between items-center py-2 text-left text-gray-800"
                    onClick={() => toggleSubmenu(item.title)}
                  >
                    <span>{item.title}</span>
                    <ChevronDown 
                      className={`transition-transform duration-200 h-5 w-5 ${
                        openSubmenus[item.title] ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <div
                    className={`mt-2 space-y-2 pl-4 overflow-hidden transition-all duration-300 ${
                      openSubmenus[item.title] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.url}
                        className="block py-2 text-gray-600"
                        onClick={toggleMenu}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.url}
                  className="block py-2 text-gray-800"
                  onClick={toggleMenu}
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
