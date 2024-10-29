import React, { useState } from 'react';
import '../Styles/Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2c2a35] text-white px-5 py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-pink-600">iDebugg</a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-pink-500 hover:text-pink-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden sm:flex space-x-6">
          <a href="#" className="hover:text-pink-500">Home</a>
          <a href="#" className="hover:text-pink-500">About me</a>
          <a href="#" className="hover:text-pink-500">Services</a>
          <a href="#" className="hover:text-pink-500">Portfolio</a>
          <a href="#" className="hover:text-pink-500">Contact</a>
        </div>

        {/* Connect Button */}
        <a href="#" className="hidden sm:inline-block bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg connectwithMe">
          Connect with me
        </a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <a href="#" className="block text-center py-2 hover:bg-gray-900">Home</a>
          <a href="#" className="block text-center py-2 hover:bg-gray-900">About me</a>
          <a href="#" className="block text-center py-2 hover:bg-gray-900">Services</a>
          <a href="#" className="block text-center py-2 hover:bg-gray-900">Portfolio</a>
          <a href="#" className="block text-center py-2 hover:bg-gray-900">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
