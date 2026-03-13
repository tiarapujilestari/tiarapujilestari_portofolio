import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-32 px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}

        <div>
          <h2 className="text-5xl font-bold mb-6">Get in Touch</h2>

          <p className="text-gray-400 mb-12">
            For business and partnership inquiry please contact me below!
          </p>

          {/* PHONE */}

          <div className="flex items-start gap-5 mb-8">
            <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center">
              <FaPhoneAlt />
            </div>

            <div>
              <p className="text-gray-400">Phone</p>
              <p className="text-lg">0899-3415-875</p>
            </div>
          </div>

          {/* EMAIL */}

          <div className="flex items-start gap-5 mb-8">
            <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center">
              <FaEnvelope />
            </div>

            <div>
              <p className="text-gray-400">Email</p>
              <p className="text-lg">dimasarsmith@gmail.com</p>
            </div>
          </div>

          {/* ADDRESS */}

          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center">
              <FaMapMarkerAlt />
            </div>

            <div>
              <p className="text-gray-400">Address</p>
              <p className="text-lg">
                Griya Japan Raya Tahap 4 B2/01, Sooko, Mojokerto
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT DECORATION */}

        <div className="relative h-[400px] hidden md:block">
          <div className="absolute top-10 right-10 w-10 h-10 border border-purple-500 rotate-45"></div>

          <div className="absolute top-40 right-32 w-6 h-6 border border-white rounded-full"></div>

          <div className="absolute bottom-10 right-10 w-40 h-40 border border-gray-700 rounded-full"></div>

          <div className="absolute bottom-20 right-40 w-20 h-20 border border-gray-700 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
