// src/components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">PolitiCompare</span>
              </Link>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Home</Link>
              <Link href="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</Link>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-gray-500 hover:text-green-500"
                   x-show="!showMenu"
                   fill="none"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                   viewBox="0 0 24 24"
                   stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</Link>
        <Link href="/about" className="block py-2 px-4 text-sm hover:bg-gray-200">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
