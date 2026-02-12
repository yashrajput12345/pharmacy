import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#0b1f3a] text-gray-300 pt-16 scroll-mt-32"
    >
      {/* ===== MAIN FOOTER ===== */}
      <div className="w-full px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* ===== Column 1 - Company Info ===== */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-[#0055aa] text-white px-3 py-2 rounded-lg font-bold">
              AL
            </div>
            <h2 className="text-xl font-semibold text-white leading-tight">
              Asclevia Lifesciences <br />
              <span className="text-sm text-gray-400 font-normal">
                Pvt. Ltd.
              </span>
            </h2>
          </div>

          <p className="text-gray-400 leading-relaxed text-sm">
            Delivering innovative and high-quality pharmaceutical
            solutions backed by scientific excellence, regulatory
            compliance, and ethical healthcare practices.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            {[FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-[#0055aa] hover:scale-110 transition-all duration-300"
                >
                  <Icon className="text-white text-sm" />
                </a>
              )
            )}
          </div>
        </div>

        {/* ===== Column 2 - Quick Links ===== */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wide">
            QUICK LINKS
          </h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#products" className="hover:text-white transition">Products</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

        {/* ===== Column 3 - Regulatory ===== */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wide">
            REGULATORY & LEGAL
          </h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Compliance</a></li>
          </ul>
        </div>

        {/* ===== Column 4 - Contact ===== */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wide">
            CONTACT US
          </h3>

          <div className="space-y-5 text-gray-400 text-sm">

            {/* Address */}
            <div className="flex items-start space-x-3">
              <FiMapPin className="text-[#0055aa] text-lg mt-1" />
              <p>
                Your Office Address Here,<br />
                City, State, Country - PIN
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3">
              <FiPhone className="text-[#0055aa] text-lg" />
              <a
                href="tel:+919876543210"
                className="hover:text-white transition"
              >
                +91 98765 43210
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <FiMail className="text-[#0055aa] text-lg" />
              <a
                href="mailto:info@asclevialifesciences.com"
                className="hover:text-white transition"
              >
                info@asclevialifesciences.com
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ===== Bottom Strip ===== */}
      <div className="border-t border-gray-800 mt-16 py-6">
        <div className="w-full px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>
            © {new Date().getFullYear()} Asclevia Lifesciences Pvt. Ltd. All rights reserved.
          </p>
          <p>
            GMP Compliant · ISO Certified · WHO Guidelines
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
