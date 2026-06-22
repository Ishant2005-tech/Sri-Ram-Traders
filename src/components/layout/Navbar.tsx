import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contractors', path: '/contractors' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200/80 text-neutral-900 w-full z-50 py-4 px-6 md:px-12 fixed top-0 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-yellow-400 text-black font-extrabold p-2.5 text-xl leading-none flex items-center justify-center rounded-lg shadow-sm">
            SR
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl leading-tight text-[#111]">Sri Ram Traders</span>
            <span className="text-[10px] text-gray-500 font-bold tracking-wider">Building Trust, Delivering Strength</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "hover:text-amber-600 transition-colors py-1.5 border-b-2",
                location.pathname === link.path 
                  ? "text-amber-600 border-amber-500" 
                  : "text-neutral-600 border-transparent hover:border-amber-500/20"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="tel:+918539914204"
            className="bg-yellow-400 text-black font-extrabold px-6 py-2.5 rounded-lg hover:bg-yellow-500 transition-colors inline-block text-sm shadow-sm"
          >
            Call Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-neutral-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 flex flex-col py-6 px-6 gap-4 shadow-xl z-50">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-lg font-bold py-2 border-b border-gray-100 flex items-center justify-between",
                location.pathname === link.path ? "text-amber-600" : "text-neutral-700 hover:text-amber-600"
              )}
              onClick={() => setIsOpen(false)}
            >
              <span>{link.name}</span>
              <span className={cn(
                "w-2 h-2 rounded-full",
                location.pathname === link.path ? "bg-amber-600" : "bg-transparent"
              )}></span>
            </Link>
          ))}
          <a
            href="tel:+918539914204"
            className="bg-yellow-400 text-black font-extrabold text-center px-6 py-3 rounded-lg mt-4 hover:bg-yellow-500 transition-colors shadow-md shadow-yellow-400/5 text-base"
          >
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
}
