import {
  FaFlask,
  FaIndustry,
  FaShippingFast,
  FaClipboardCheck,
  FaMicroscope,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaMicroscope />,
    title: "Diagnostic Kits & IVD Solutions",
    desc: "We specialize in providing high-quality diagnostic kits, including HPV screening and rapid detection solutions designed for accuracy and reliability.",
  },
  {
    icon: <FaIndustry />,
    title: "Contract Manufacturing",
    desc: "We collaborate with certified manufacturing partners to develop pharmaceutical and diagnostic products under our brand with scalable production.",
  },
  {
    icon: <FaShippingFast />,
    title: "Co-Marketing & Strategic Partnerships",
    desc: "We partner with leading healthcare companies to expand market reach and improve product accessibility through strong distribution networks.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Pharmaceutical Distribution",
    desc: "Efficient supply chain ensuring timely delivery of medicines, diagnostic kits, and healthcare products to hospitals and pharmacies.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Regulatory & Compliance Support",
    desc: "We ensure all products meet regulatory standards with proper documentation, licensing, and quality assurance processes.",
  },
  {
    icon: <FaFlask />,
    title: "Product Branding & Market Development",
    desc: "We help build strong healthcare brands through strategic marketing, packaging, and positioning for better market acceptance.",
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

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-br from-[#f8fbff] to-[#eef4ff] scroll-mt-28 overflow-hidden"
    >
      {/* Background Blur Circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative w-full px-8 lg:px-16">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-xl font-semibold text-[#0055aa] tracking-widest mb-3">
            OUR SERVICES
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#0f172a] mb-4">
            Our Pharmaceutical Services
          </h2>

          <p className="text-gray-500 max-w-3xl mx-auto">
            At Asclevia Lifesciences, we deliver comprehensive pharmaceutical and diagnostic solutions designed to enhance patient outcomes and healthcare accessibility across India. Our services are built on quality, compliance, and innovation.
          </p>
        </motion.div>

        {/* ===== SERVICES GRID ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-3 transition duration-300 relative overflow-hidden"
            >
              {/* Top Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#0055aa] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-[#0055aa] rounded-xl text-xl mb-6 transition duration-300 group-hover:bg-[#0055aa] group-hover:text-white group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#0f172a] mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;