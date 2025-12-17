import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Chi Siamo', path: '/chi-siamo' },
  { label: 'Menu Servizi', path: '/menu' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${scrolled ? 'py-4' : 'py-8'}`}
      >
        <div
          className={`
            relative flex justify-between items-center px-8 transition-all duration-500
            ${scrolled
              ? 'w-[90%] md:w-auto bg-stone-100/80 backdrop-blur-md shadow-lg rounded-full py-3 gap-12 border border-stone-200/50'
              : 'w-full container bg-transparent py-2'
            }
        `}
        >
          <Link to="/" className={`text-2xl font-serif tracking-tighter font-bold z-50 transition-colors text-stone-800`}>
            OUR DAY
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`uppercase text-xs tracking-[0.2em] font-medium hover:text-olive-800 transition-colors relative group ${location.pathname === item.path ? 'text-olive-800' : 'text-stone-800'
                  }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-olive-800 transform origin-left transition-transform duration-300 ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden z-50">
            <button
              className={`text-stone-800 focus:outline-none`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} className={'text-stone-800'} />}
            </button>
          </div>


        </div>
      </motion.nav>
      {/* Mobile Overlay - outside nav to cover full screen properly */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-stone-100 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (i * 0.1), duration: 0.5 }}
              >
                <Link
                  to={item.path}
                  className="text-4xl font-serif text-stone-800 hover:text-olive-800 italic"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};