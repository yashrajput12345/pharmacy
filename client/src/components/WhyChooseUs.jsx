import {
  FiShield,
  FiAward,
  FiHeart,
  FiTruck,
} from "react-icons/fi";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FiAward size={22} />,
    title: "Quality-Driven Approach",
    desc: "We prioritize consistent quality in every product through strict standards and continuous improvement.",
  },
  {
    icon: <FiShield size={22} />,
    title: "Regulatory Compliance Focus",
    desc: "All our products and processes strictly follow pharmaceutical and medical regulatory guidelines.",
  },
  {
    icon: <FiTruck size={22} />,
    title: "Pan-India Distribution Vision",
    desc: "We aim to build a strong nationwide distribution network ensuring accessibility across India.",
  },
  {
    icon: <FiHeart size={22} />,
    title: "Innovation-Led Portfolio",
    desc: "Our product range is driven by innovation, focusing on modern healthcare needs and solutions.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
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

const WhyChooseUs = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#f8fbff] to-[#eef4ff] py-24 overflow-hidden scroll-mt-28">

      {/* Background Blur Effects */}
      <div className="absolute -top-20 left-0 w-80 h-80 bg-[#1FA3A3]/10 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1FA3A3]/20 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative w-full px-8 lg:px-16 grid lg:grid-cols-2 gap-16 items-start">

        {/* ===== LEFT CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col"
        >
          <p className="text-xl font-semibold text-[#14234A] tracking-widest mb-4">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#14234A] leading-tight mb-6">
            Why Choose Asclevia Healthcare?
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-lg mb-8">
            We are committed to delivering reliable, affordable, and innovative healthcare solutions that make a difference.
          </p>

          {/* IMAGE */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img
              src="/trust.png"
              alt="Pharmaceutical Research"
              className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* ===== RIGHT CARDS ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid sm:grid-cols-2 gap-8"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.03] transition-all duration-300 ease-out relative overflow-hidden cursor-pointer"
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#1FA3A3] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-[#1FA3A3]/10 text-[#1FA3A3] rounded-xl mb-6 transition duration-300 group-hover:bg-[#14234A] group-hover:text-white group-hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-3 text-[#14234A]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;