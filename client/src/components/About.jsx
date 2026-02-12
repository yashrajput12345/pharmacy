import { FaBullseye, FaLightbulb, FaHeart } from "react-icons/fa";
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
    <section
      id="about"
      className="bg-white py-16 scroll-mt-28"
    >
      <div className="w-full px-8 lg:px-16">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-stretch"
        >

          {/* ===== LEFT SIDE ===== */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col"
          >
            <p className="text-xl font-semibold text-[#0055aa] tracking-widest mb-3">
              WHO WE ARE
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold text-[#0f172a] mb-4 leading-tight">
              Driven by Purpose,
              <span className="block text-[#0055aa]">
                Guided by Science
              </span>
            </h2>

            <p className="text-gray-500 mb-6 max-w-lg">
              Asclevia Lifesciences Pvt. Ltd. delivers high-quality
              pharmaceutical solutions through innovation,
              scientific excellence, and ethical healthcare practices.
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

            {/* Vision */}
            <motion.div
              variants={itemVariants}
              className="group flex flex-1 items-start gap-4 bg-[#f8fafc] p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-[#0055aa] rounded-lg shrink-0 transition duration-300 group-hover:bg-[#0055aa] group-hover:text-white group-hover:scale-110">
                <FaBullseye />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                  Our Vision
                </h3>
                <p className="text-gray-500 text-sm">
                  To become a globally trusted pharmaceutical brand.
                  We aim to advance healthcare accessibility through innovation and science.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              variants={itemVariants}
              className="group flex flex-1 items-start gap-4 bg-[#f8fafc] p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-[#0055aa] rounded-lg shrink-0 transition duration-300 group-hover:bg-[#0055aa] group-hover:text-white group-hover:scale-110">
                <FaLightbulb />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-500 text-sm">
                  To develop safe, effective, and affordable medicines.
                  We prioritize ethical research and patient-centered healthcare.
                </p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              variants={itemVariants}
              className="group flex flex-1 items-start gap-4 bg-[#f8fafc] p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-[#0055aa] rounded-lg shrink-0 transition duration-300 group-hover:bg-[#0055aa] group-hover:text-white group-hover:scale-110">
                <FaHeart />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                  Our Values
                </h3>
                <p className="text-gray-500 text-sm">
                  Integrity, compassion, and scientific excellence guide us.
                  We are committed to improving lives responsibly and sustainably.
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
