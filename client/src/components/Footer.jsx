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
      className="bg-[#14234A] text-gray-300 pt-16 scroll-mt-32"
    >
      {/* ===== MAIN FOOTER ===== */}
      <div className="w-full px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* ===== Column 1 - Company Info ===== */}
        <div>
         <div className="flex items-center space-x-3 mb-6">
  <img
    src="/ASCLEVIA LOGO_page-0001.jpg"
    alt="Asclevia Logo"
    className="w-18 h-20 object-contain rounded-xl shadow-md"
  />

  <div className="leading-tight">
    <h2 className="text-xl font-semibold text-white">
      Asclevia Lifesciences <br />
      <span className="text-sm text-gray-400 font-normal">
        Pvt. Ltd.
      </span>
    </h2>

    {/* Tagline */}
    <p className="text-xs text-gray-400 mt-1 font-medium">
      Innovating for a <br />
      healthier tomorrow
    </p>
  </div>
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
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-[#1FA3A3] hover:scale-110 transition-all duration-300"
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
              <FiMapPin className="text-[#1FA3A3] text-lg mt-1" />
              <p>
                Asclevia Lifesciences Pvt. Ltd <br />
                D-9, Ground Floor, Sec. 3,<br />
                Gautam Budh Nagar <br />
                Noida – 201301, <br />
                Uttar Pradesh, India
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3">
              <FiPhone className="text-[#1FA3A3] text-lg" />
              <a
                href="tel:+919876543210"
                className="hover:text-white transition"
              >
                +91 8679358117
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <FiMail className="text-[#1FA3A3] text-lg" />
              <a
                href="mailto:Info@asclevialife.com"
                className="hover:text-white transition"
              >
                Info@asclevialife.com
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
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;