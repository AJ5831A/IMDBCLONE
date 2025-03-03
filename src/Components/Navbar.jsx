import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-4xl font-extrabold tracking-wider">
          IMDB Clone
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-2xl font-semibold">
          <a href="#" className="hover:text-yellow-400 transition duration-300">Home</a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">Movies</a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">TV Shows</a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-3 rounded-md text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={40} /> : <Menu size={40} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-center space-y-6 py-6 text-2xl font-semibold">
          <a href="#" className="block hover:text-yellow-400 transition">Home</a>
          <a href="#" className="block hover:text-yellow-400 transition">Movies</a>
          <a href="#" className="block hover:text-yellow-400 transition">TV Shows</a>
          <a href="#" className="block hover:text-yellow-400 transition">Contact</a>
        </div>
      )}
    </nav>
  );
}
