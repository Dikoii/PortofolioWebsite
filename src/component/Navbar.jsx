import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Technologies", href: "#technologies" },
  { name: "Experiences", href: "#experiences" },
  { name: "Projects", href: "#projects" },
  { name: "Contacts", href: "#contacts" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-800 bg-opacity-40 backdrop-blur-md"
          : "bg-transparent"
      } text-white py-6 px-4 sm:px-8 lg:px-16`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
          <a
            href="#"
            className="text-4xl font-bold relative group transition-all duration-300"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Dikoi
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-pink-500 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block hover:text-pink-500 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
