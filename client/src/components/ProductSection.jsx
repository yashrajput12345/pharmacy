import { FaCapsules, FaTablets, FaFlask, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

const products = [
  {
    icon: <FaTablets />,
    title: "Tablets",
    description:
      "General medicine, orthopaedic, gastro & multivitamin formulations.",
    image: "/tablet.jpg",
  },
  {
    icon: <FaCapsules />,
    title: "Capsules",
    description:
      "Softgel, nutraceutical and advanced specialty products.",
    image: "/capsule.jpg",
  },
  {
    icon: <FaFlask />,
    title: "Syrups & Drops",
    description:
      "Pediatric, iron, calcium and liver care solutions.",
    image: "/syrup.jpg",
  },
  {
    icon: <FaLeaf />,
    title: "Health Supplements",
    description:
      "Gummies, proteins and wellness product range.",
    image: "/supplement.webp",
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
      <div className="absolute -top-24 right-0 w-80 h-80 bg-blue-200 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative w-full px-8 lg:px-16">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-xl font-semibold text-[#0055aa] tracking-widest mb-3">
            OUR PRODUCTS
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#0f172a] mb-4">
            Product Portfolio
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Our diversified pharmaceutical product range is designed to meet
            global healthcare standards with quality and innovation.
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
              {/* Blue Accent Strip */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#0055aa] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              {/* Product Image Container */}
              <div className="mb-6 bg-[#f1f6ff] rounded-xl p-4 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-36 w-full object-contain transition duration-300 group-hover:scale-110"
                />
              </div>

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-[#0055aa] text-lg mb-4 transition duration-300 group-hover:bg-[#0055aa] group-hover:text-white group-hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
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
