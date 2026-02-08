import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">MyNGO</h1>
        
        {/* Hamburger Icon (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul className={`md:flex md:space-x-6 text-gray-700 font-medium absolute md:static bg-white left-0 w-full md:w-auto transition-all duration-300 ease-in ${
          menuOpen ? 'top-16 opacity-100' : 'top-[-400px] opacity-0 md:opacity-100'
        }`}>
          <li className="py-2 px-4 md:p-0"><a href="#home" className="hover:text-blue-500 block">Home</a></li>
          <li className="py-2 px-4 md:p-0"><a href="#about" className="hover:text-blue-500 block">About</a></li>
          <li className="py-2 px-4 md:p-0"><a href="#volunteer" className="hover:text-blue-500 block">Volunter</a></li>
        </ul>
      </div>
    </nav>
  );
}
