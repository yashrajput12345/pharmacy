import { useState, useEffect } from "react";
import { FiPhone, FiMail } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== TOP INFO BAR ===== */}
      <div className="bg-[#14234A] text-white text-sm py-2 px-8 lg:px-16 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-2">
            <FiPhone size={14} />
            <span>+91 8679358117</span>
          </span>

          <span className="flex items-center space-x-2">
            <FiMail size={14} />
            <span>Info@asclevialife.com</span>
          </span>
        </div>

        {/* FIXED → now white */}
        <span className="hidden md:block font-medium text-white">
          Trusted Pharmaceutical Partner
        </span>
      </div>

      {/* ===== MAIN NAVBAR ===== */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md py-2"
            : "bg-white/90 backdrop-blur-md py-4"
        }`}
      >
        <div className="w-full px-8 lg:px-16 flex items-center justify-between relative">
          
          {/* ===== LEFT - LOGO ===== */}
          <div className="flex items-center space-x-4">
            <img
              src="/ASCLEVIA LOGO_page-0001.jpg"
              alt="Asclevia Logo"
              className="w-16 h-16 object-contain rounded-xl shadow-md"
            />

            <div className="leading-tight">
              <h1 className="font-bold text-[#14234A] text-lg">
                Asclevia Lifesciences
              </h1>
              <p className="text-sm text-gray-500 -mt-1">
                Pvt. Ltd.
              </p>
            </div>
          </div>

          {/* ===== CENTER MENU ===== */}
          <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-10 font-medium text-[#14234A]">
            
            <li>
              <a href="#home" className="hover:text-[#1FA3A3] transition relative group">
                Home
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1FA3A3] transition-all group-hover:w-full"></span>
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-[#1FA3A3] transition relative group">
                About Us
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1FA3A3] transition-all group-hover:w-full"></span>
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-[#1FA3A3] transition relative group">
                Services
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1FA3A3] transition-all group-hover:w-full"></span>
              </a>
            </li>

            <li>
              <a href="#products" className="hover:text-[#1FA3A3] transition relative group">
                Products
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1FA3A3] transition-all group-hover:w-full"></span>
              </a>
            </li>

          </ul>

          {/* ===== RIGHT SIDE - CONTACT BUTTON ===== */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-[#14234A] text-white px-6 py-2.5 rounded-xl shadow-md hover:bg-[#0f1b3a] transition duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* ===== MOBILE MENU BUTTON ===== */}
          <button
            className="md:hidden text-[#14234A] text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* ===== MOBILE MENU ===== */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-8 py-6 space-y-4 shadow-md">
            <a href="#home" className="block text-[#14234A] hover:text-[#1FA3A3]">Home</a>
            <a href="#about" className="block text-[#14234A] hover:text-[#1FA3A3]">About Us</a>
            <a href="#services" className="block text-[#14234A] hover:text-[#1FA3A3]">Services</a>
            <a href="#products" className="block text-[#14234A] hover:text-[#1FA3A3]">Products</a>
            <a
              href="#contact"
              className="block bg-[#14234A] text-white px-4 py-2 rounded-lg text-center mt-2 hover:bg-[#0f1b3a]"
            >
              Contact Us
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;