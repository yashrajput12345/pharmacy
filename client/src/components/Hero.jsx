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
          <div className="inline-flex items-center gap-2 bg-[#1FA3A3]/10 text-[#1FA3A3] px-4 py-2 rounded-full text-sm font-medium mb-6">
            🛡 Trusted Healthcare Partner
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-4xl font-bold leading-tight text-[#14234A]">
            Innovating for a  
            <span className="block text-[#1FA3A3]">
              Healthier Tomorrow
            </span>
          </h1>

          {/* Description */}
          <div className="mt-6 text-lg text-[#64748b] leading-relaxed max-w-xl space-y-4">

            <p>
              Asclevia Lifesciences is a fast-growing healthcare company focused on delivering high-quality pharmaceutical and diagnostic solutions. With a strong emphasis on innovation and compliance, we collaborate with leading manufacturing partners to bring effective healthcare products to the market.
            </p>

            <p>
              Our expertise lies in diagnostic kits, infection management solutions, and post-care healthcare products designed to improve patient outcomes.
            </p>

            <p>
              We believe in building long-term partnerships with healthcare providers, distributors, and institutions to ensure seamless product availability and trust.
            </p>

            <p>
              With a vision to expand across India, Asclevia Lifesciences is dedicated to redefining healthcare delivery through quality, reliability, and innovation.
            </p>

          </div>

          {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">

  {/* Primary Button */}
  <a
    href="#contact"
    className="bg-[#14234A] text-white px-6 py-3 rounded-xl shadow-md 
    hover:bg-[#1FA3A3] hover:text-white 
    transition duration-300"
  >
    Get a Consultation →
  </a>

  {/* Secondary Button */}
  <a
    href="#about"
    className="border border-gray-300 text-[#14234A] px-6 py-3 rounded-xl 
    hover:bg-[#1FA3A3] hover:text-white 
    transition duration-300"
  >
    Learn More About Us
  </a>

</div>

          {/* Stats */}
          <div className="flex gap-12 mt-12 text-[#14234A] font-bold text-2xl">

            <div className="flex items-center gap-3">
              <div className="bg-[#1FA3A3]/10 text-[#1FA3A3] p-2 rounded-lg">
                💬
              </div>

              <div>
                24/7
                <p className="text-sm text-gray-500 font-medium mt-1">
                  Support
                </p>
              </div>
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

        </div>
      </div>
    </section>
  );
};

export default Hero;