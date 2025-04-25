import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-orange-600 p-4  top-0 z-10 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Shree Sakshi Gajanan Art</h1>

        {/* Hamburger menu icon (mobile only) */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 font-semibold">
          <li><a href="#home" className="link-115">Home</a></li>
          <li><a href="#about" className="link-115">About</a></li>
          <li><a href="#products" className="link-115">Products</a></li>
          <li><a href="#contact" className="link-115">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu with Slide-in */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col space-y-2 mt-4 font-semibold">
          <li><a href="#home" className="link-115">Home</a></li>
          <li><a href="#about" className="link-115">About</a></li>
          <li><a href="#products" className="link-115">Products</a></li>
          <li><a href="#contact" className="link-115">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
