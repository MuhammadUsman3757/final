import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-400">
          <Link to="/">Saylani Microfinance App</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-green-400">Home</Link>
      <Link to="/loanForm" className="hover:text-green-400">Loan Request Form</Link><br />
      <Link to="/calculatorPage" className="hover:text-green-400">Calculator Form</Link><br />
          <Link to="/login" className="hover:text-green-400">User Registration</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 space-y-2 px-4 py-3 text-center">
          <Link to="/" className="hover:text-green-400">Home</Link><br />
          <Link to="/loanForm" className="hover:text-green-400">Loan Request Form</Link><br />
          <Link to="/login" className="hover:text-green-400">User Registration</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
