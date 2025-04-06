
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-6 border-b border-neutral-200">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">
            b<sup>2</sup>
          </span>
          <span className="hidden md:inline-block font-medium">Budget & Brains</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-neutral-800 hover:text-coral-500 transition-colors">
            Home
          </Link>
          <Link to="/how-we-work" className="text-neutral-800 hover:text-coral-500 transition-colors">
            How We Work
          </Link>
          <Link to="/services" className="text-neutral-800 hover:text-coral-500 transition-colors">
            Services
          </Link>
          <Link to="/pricing" className="text-neutral-800 hover:text-coral-500 transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-neutral-800 hover:text-coral-500 transition-colors">
            About
          </Link>
          <Button asChild>
            <Link to="/contact">Book a Free Audit</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-800"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-white">
            <div className="container py-6 flex justify-between items-center border-b border-neutral-200">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold">
                  b<sup>2</sup>
                </span>
                <span className="font-medium">Budget & Brains</span>
              </Link>
              <button
                className="text-neutral-800"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="container py-8 flex flex-col space-y-6">
              <Link
                to="/"
                className="text-xl text-neutral-800"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/how-we-work"
                className="text-xl text-neutral-800"
                onClick={toggleMenu}
              >
                How We Work
              </Link>
              <Link
                to="/services"
                className="text-xl text-neutral-800"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/pricing"
                className="text-xl text-neutral-800"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="text-xl text-neutral-800"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Button asChild className="w-full">
                <Link to="/contact" onClick={toggleMenu}>
                  Book a Free Audit
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
