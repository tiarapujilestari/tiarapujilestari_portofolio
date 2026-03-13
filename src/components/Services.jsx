import { FaMobileAlt, FaPenNib, FaLaptopCode } from "react-icons/fa";

export default function Services() {
  return (
    <section className="py-32 px-10 text-center relative">
      {/* Title */}

      <p className="text-gray-400 mb-4">What Do I Offer</p>

      <h2 className="text-4xl font-bold max-w-3xl mx-auto leading-snug">
        Creates Professional Design That's Oriented Towards Client Needs
      </h2>

      {/* Line */}

      <div className="w-40 h-2 bg-purple-600 mx-auto mt-10 rounded-full"></div>

      {/* Cards */}

      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-10">
        {/* Card 1 */}

        <div className="bg-[#0f0f14] p-12 rounded-xl opacity-40 hover:opacity-100 transition">
          <div className="text-purple-500 text-4xl mb-6 flex justify-center">
            <FaPenNib />
          </div>

          <h3 className="text-lg font-semibold">Content Design</h3>
        </div>

        {/* Card 2 (Active) */}

        <div className="bg-[#12121a] border border-purple-500 p-12 rounded-xl shadow-[0_0_40px_rgba(139,92,246,0.3)]">
          <div className="text-purple-500 text-5xl mb-6 flex justify-center">
            <FaMobileAlt />
          </div>

          <h3 className="text-xl font-semibold text-purple-400">
            Mobile App Design
          </h3>
        </div>

        {/* Card 3 */}

        <div className="bg-[#0f0f14] p-12 rounded-xl opacity-40 hover:opacity-100 transition">
          <div className="text-purple-500 text-4xl mb-6 flex justify-center">
            <FaLaptopCode />
          </div>

          <h3 className="text-lg font-semibold">Web Design</h3>
        </div>
      </div>

      {/* Slider Navigation */}

      <div className="flex justify-center items-center gap-6 mt-16">
        <button className="text-gray-400 text-2xl">‹</button>

        <div className="flex gap-3">
          <span className="w-10 h-2 bg-gray-500 rounded-full"></span>

          <span className="w-10 h-2 bg-purple-600 rounded-full"></span>

          <span className="w-10 h-2 bg-gray-500 rounded-full"></span>
        </div>

        <button className="text-gray-400 text-2xl">›</button>
      </div>
    </section>
  );
}
