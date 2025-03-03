import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-4xl font-extrabold tracking-wider">
          IMDB Clone
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-2xl font-semibold">
          <Link to="/" className="hover:text-yellow-400 transition duration-300">Home</Link>
          <Link to="/movies" className="hover:text-yellow-400 transition duration-300">Movies</Link>
          <Link to="/recommendations" className="hover:text-yellow-400 transition duration-300">Recommendations</Link>
          <Link to="/watchlist" className="hover:text-yellow-400 transition duration-300">Watchlist</Link>
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
          <Link to="/" className="block hover:text-yellow-400 transition">Home</Link>
          <Link to="/movies" className="block hover:text-yellow-400 transition">Movies</Link>
          <Link to="/recommendations" className="block hover:text-yellow-400 transition">Recommendations</Link>
          <Link to="/watchlist" className="block hover:text-yellow-400 transition">Watchlist</Link>
        </div>
      )}
    </nav>
  );
}
