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
      <div className="bg-[#0055aa] text-white text-sm py-2 px-8 lg:px-16 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-2">
            <FiPhone size={14} />
            <span>+91 98765 43210</span>
          </span>

          <span className="flex items-center space-x-2">
            <FiMail size={14} />
            <span>info@asclevialifesciences.com</span>
          </span>
        </div>

        <span className="hidden md:block font-medium">
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
          
          {/* ===== LEFT - COMPANY NAME ===== */}
          <div className="flex items-center space-x-4">
            <div className="bg-[#0055aa] text-white px-4 py-2 rounded-xl font-bold text-lg shadow-md">
              AL
            </div>

            <div className="leading-tight">
              <h1 className="font-bold text-[#0055aa] text-lg">
                Asclevia Lifesciences
              </h1>
              <p className="text-sm text-gray-500 -mt-1">
                Pvt. Ltd.
              </p>
            </div>
          </div>

          {/* ===== CENTER MENU ===== */}
          <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-10 font-medium text-gray-700">
            
            <li>
              <a href="#home" className="hover:text-[#0055aa] transition relative group">
                Home
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0055aa] transition-all group-hover:w-full"></span>
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-[#0055aa] transition relative group">
                About Us
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0055aa] transition-all group-hover:w-full"></span>
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-[#0055aa] transition relative group">
                Services
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0055aa] transition-all group-hover:w-full"></span>
              </a>
            </li>

            <li>
              <a href="#products" className="hover:text-[#0055aa] transition relative group">
                Products
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0055aa] transition-all group-hover:w-full"></span>
              </a>
            </li>

          </ul>

          {/* ===== RIGHT SIDE - CONTACT BUTTON ===== */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-[#0055aa] text-white px-6 py-2.5 rounded-xl shadow-md hover:bg-[#003f80] transition duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* ===== MOBILE MENU BUTTON ===== */}
          <button
            className="md:hidden text-[#0055aa] text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* ===== MOBILE MENU ===== */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-8 py-6 space-y-4 shadow-md">
            <a href="#home" className="block hover:text-[#0055aa]">Home</a>
            <a href="#about" className="block hover:text-[#0055aa]">About Us</a>
            <a href="#services" className="block hover:text-[#0055aa]">Services</a>
            <a href="#products" className="block hover:text-[#0055aa]">Products</a>
            <a
              href="#contact"
              className="block bg-[#0055aa] text-white px-4 py-2 rounded-lg text-center mt-2 hover:bg-[#003f80]"
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
