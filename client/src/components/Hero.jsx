const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#f8fafc] min-h-screen flex items-center"
    >
      <div className="w-full px-8 lg:px-16 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-[#0055aa] px-4 py-2 rounded-full text-sm font-medium mb-6">
            🛡 Trusted Healthcare Partner
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#0f172a]">
            Your Health,
            <span className="block text-[#0055aa]">
              Our Priority
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-[#64748b] leading-relaxed max-w-xl">
           Asclevia Lifesciences Pvt. Ltd. is a fast-growing pharmaceutical and nutraceutical company dedicated to manufacturing high-quality, safe, and effective healthcare products. With strong ethical practices, advanced manufacturing standards, and customer-centric values, we serve doctors, distributors, and patients across India.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#contact"
              className="bg-[#0055aa] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#003f80] transition duration-300"
            >
              Get a Consultation →
            </a>

            <a
              href="#about"
              className="border border-gray-300 text-[#0f172a] px-6 py-3 rounded-xl hover:bg-gray-100 transition duration-300"
            >
              Learn More About Us
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-12 mt-12 text-[#0055aa] font-bold text-2xl">

            <div>
              50K+
              <p className="text-sm text-gray-500 font-medium mt-1">
                Happy Clients
              </p>
            </div>

            <div>
              24/7
              <p className="text-sm text-gray-500 font-medium mt-1">
                Support
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          <img
            src="/pharma3.png"
            alt="Pharmacy"
            className="rounded-2xl shadow-xl"
          />

          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-6 py-4 flex items-center gap-4">
            <div className="bg-green-100 text-green-600 p-3 rounded-full">
              ✔
            </div>
            <div>
              <p className="font-semibold text-[#0f172a]">
                Licensed & Certified
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
