import { motion } from "framer-motion";
import { FaCertificate, FaGlobe, FaShieldAlt } from "react-icons/fa";

const Certifications = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0055aa] to-[#003f80] text-white overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute -top-20 left-0 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>

      <div className="relative w-full px-8 lg:px-16 text-center">

        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl lg:text-5xl font-bold mb-6"
        >
          Trusted Worldwide
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg max-w-3xl mx-auto text-blue-100"
        >
          Accredited by leading global regulatory bodies, ensuring the
          highest standards of pharmaceutical quality, safety, and compliance.
        </motion.p>

        {/* Certification Icons */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16 grid sm:grid-cols-3 gap-10"
        >
          {/* GMP */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition duration-300">
            <FaCertificate className="text-4xl mx-auto mb-4 text-white" />
            <h3 className="font-semibold text-xl mb-2">GMP Certified</h3>
            <p className="text-blue-100 text-sm">
              Compliant with Good Manufacturing Practices standards.
            </p>
          </div>

          {/* ISO */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition duration-300">
            <FaShieldAlt className="text-4xl mx-auto mb-4 text-white" />
            <h3 className="font-semibold text-xl mb-2">ISO Certified</h3>
            <p className="text-blue-100 text-sm">
              International quality management system certification.
            </p>
          </div>

          {/* Global */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition duration-300">
            <FaGlobe className="text-4xl mx-auto mb-4 text-white" />
            <h3 className="font-semibold text-xl mb-2">Global Compliance</h3>
            <p className="text-blue-100 text-sm">
              Adhering to international pharmaceutical regulations.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Certifications;
