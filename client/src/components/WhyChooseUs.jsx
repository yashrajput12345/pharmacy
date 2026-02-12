import {
  FiShield,
  FiAward,
  FiHeart,
  FiDollarSign,
} from "react-icons/fi";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FiShield size={22} />,
    title: "Licensed Professionals",
    desc: "Our team consists of certified pharmaceutical experts committed to delivering safe and compliant healthcare solutions.",
  },
  {
    icon: <FiAward size={22} />,
    title: "Quality Assured",
    desc: "We follow strict quality control protocols and international regulatory standards for every product we deliver.",
  },
  {
    icon: <FiHeart size={22} />,
    title: "Patient-Centered Approach",
    desc: "We prioritize patient wellbeing with ethical practices and innovative healthcare solutions.",
  },
  {
    icon: <FiDollarSign size={22} />,
    title: "Competitive & Transparent Pricing",
    desc: "We offer cost-effective pharmaceutical solutions without compromising on quality or safety.",
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
      <div className="absolute -top-20 left-0 w-80 h-80 bg-blue-200 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative w-full px-8 lg:px-16 grid lg:grid-cols-2 gap-16 items-start">

        {/* ===== LEFT CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col"
        >
          <p className="text-xl font-semibold text-[#0055aa] tracking-widest mb-4">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight mb-6">
            Your Trusted Pharmaceutical Partner
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-lg mb-8">
            Asclevia Lifesciences Pvt. Ltd. is committed to delivering
            innovative, safe, and high-quality pharmaceutical solutions
            backed by scientific excellence and ethical standards.
          </p>

          {/* IMAGE BELOW TEXT */}
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
              {/* Blue Accent Strip */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#0055aa] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-[#0055aa] rounded-xl mb-6 transition duration-300 group-hover:bg-[#0055aa] group-hover:text-white group-hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-3 text-[#0f172a]">
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
