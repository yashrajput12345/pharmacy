import { FaBullseye, FaLightbulb, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-16 scroll-mt-28">
      <div className="w-full px-8 lg:px-16">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-stretch"
        >

          {/* ===== LEFT SIDE ===== */}
          <motion.div variants={itemVariants} className="flex flex-col">

            <p className="text-xl font-semibold text-[#14234A] tracking-widest mb-3">
              WHO WE ARE
            </p>

            <h2 className="text-3xl lg:text-3xl font-bold text-[#14234A] mb-4 leading-tight">
              Transforming Healthcare with
              <span className="block text-[#1FA3A3]">
                Innovative Diagnostic & Pharmaceutical Solutions
              </span>
            </h2>

            <p className="text-gray-500 mb-4 max-w-lg">
              At Asclevia Lifesciences, we are committed to delivering advanced, reliable, and accessible healthcare solutions across India. From diagnostic innovations to pharmaceutical distribution, we aim to bridge the gap between quality healthcare products and patient needs.
            </p>

            <p className="text-gray-500 mb-6 max-w-lg">
              Our focus lies in bringing cutting-edge diagnostic kits, including HPV screening solutions, along with integrated healthcare products that support prevention, early detection, and recovery.
            </p>

            <img
              src="/pharma2.png"
              alt="Pharmaceutical Lab"
              className="rounded-2xl shadow-lg w-full max-h-[340px] object-cover mt-auto"
            />
          </motion.div>

          {/* ===== RIGHT SIDE ===== */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col gap-6 h-full"
          >

            {/* Mission */}
            <motion.div
              variants={itemVariants}
              className="group flex flex-1 items-start gap-4 bg-[#f8fafc] p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-[#1FA3A3]/10 text-[#1FA3A3] rounded-lg shrink-0 transition duration-300 group-hover:bg-[#14234A] group-hover:text-white group-hover:scale-110">
                <FaLightbulb />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#14234A] mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-500 text-sm">
                  To make high-quality healthcare solutions accessible, affordable, and impactful across every corner of India.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={itemVariants}
              className="group flex flex-1 items-start gap-4 bg-[#f8fafc] p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-[#1FA3A3]/10 text-[#1FA3A3] rounded-lg shrink-0 transition duration-300 group-hover:bg-[#14234A] group-hover:text-white group-hover:scale-110">
                <FaBullseye />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#14234A] mb-2">
                  Our Vision
                </h3>
                <p className="text-gray-500 text-sm">
                  To become a leading healthcare brand known for innovation, trust, and excellence in diagnostics and pharmaceuticals.
                </p>
              </div>
            </motion.div>

            {/* Strengths */}
            <motion.div
              variants={itemVariants}
              className="group flex flex-1 items-start gap-4 bg-[#f8fafc] p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-[#1FA3A3]/10 text-[#1FA3A3] rounded-lg shrink-0 transition duration-300 group-hover:bg-[#14234A] group-hover:text-white group-hover:scale-110">
                <FaCheckCircle />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#14234A] mb-2">
                  Our Strengths
                </h3>
                <p className="text-gray-500 text-sm">
                  Advanced diagnostic solutions, strong distribution network, strategic partnerships, and regulatory-compliant operations.
                </p>
              </div>
            </motion.div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;