import { FaMicroscope, FaBriefcaseMedical, FaFemale, FaHeartbeat } from "react-icons/fa";
import { motion } from "framer-motion";

const products = [
  {
    icon: <FaMicroscope />,
    title: "HPV Screening Kit",
    description:
      "Our HPV diagnostic solution is designed for early detection and effective screening, helping in the management of cervical health risks.",
    image: "/HVP.png",
  },
  {
    icon: <FaBriefcaseMedical />,
    title: "Infection Management Kits",
    description:
      "Specially curated kits aimed at supporting patients during infection recovery with clinically relevant components.",
    image: "/IMK.png",
  },
  {
    icon: <FaFemale />,
    title: "Women’s Health Solutions",
    description:
      "Focused products addressing urinary tract health, nutritional support, and preventive care for women.",
    image: "/WHS.png",
  },
  {
    icon: <FaHeartbeat />,
    title: "Post-Care & Recovery Kits",
    description:
      "Integrated healthcare kits designed for post-surgery and recovery support, ensuring better healing and patient comfort.",
    image: "/PCR.png",
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

const ProductSection = () => {
  return (
    <section
      id="products"
      className="relative bg-gradient-to-br from-[#f8fbff] to-[#eef4ff] py-24 scroll-mt-32 overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute -top-24 right-0 w-80 h-80 bg-[#1FA3A3]/10 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1FA3A3]/20 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative w-full px-8 lg:px-16">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-16"
        >
          

          <h2 className="text-3xl lg:text-3xl font-bold text-[#14234A] mb-4">
            Our Pharmaceutical Products
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Our product portfolio focuses on innovative diagnostic and healthcare solutions designed to improve patient outcomes and support modern medical needs.
          </p>
        </motion.div>

        {/* ===== PRODUCT GRID ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.03] transition-all duration-300 ease-out relative overflow-hidden"
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#1FA3A3] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              {/* Image */}
              <div className="mb-6 bg-[#f1f6ff] rounded-xl p-4 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-36 w-full object-contain transition duration-300 group-hover:scale-110"
                />
              </div>

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#1FA3A3]/10 text-[#1FA3A3] text-lg mb-4 transition duration-300 group-hover:bg-[#14234A] group-hover:text-white group-hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#14234A] mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;