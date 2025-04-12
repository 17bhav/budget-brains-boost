
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-end">
              <span className="text-3xl font-bold">
                b<sup>2</sup>
              </span>
              <span className="ml-2 text-lg font-medium">Budget & Brains</span>
            </div>
            <p className="text-neutral-600">
              Smart marketing consultancy helping startups reduce spend while increasing impact.
            </p>
            <p className="text-neutral-500 text-sm italic">
              Built by marketers tired of wasted budgets.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-600 hover:text-coral-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/how-we-work" className="text-neutral-600 hover:text-coral-500 transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-600 hover:text-coral-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-neutral-600 hover:text-coral-500 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-600 hover:text-coral-500 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:bhavika@budgetandbrains.com" className="text-neutral-600 hover:text-coral-500 transition-colors">
                  bhavika@budgetandbrains.com
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/budgetandbrains_/" className="text-neutral-600 hover:text-coral-500 transition-colors flex items-center gap-2">
                  <Instagram size={18} />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/budgetandbrains" className="text-neutral-600 hover:text-coral-500 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Start Now</h3>
            <Link to="/contact" className="btn btn-primary">
              Book a Free Audit
            </Link>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            &copy; {currentYear} Budget & Brains. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-neutral-500 text-sm hover:text-coral-500">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-neutral-500 text-sm hover:text-coral-500">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
