export default function CTA() {
  return (
    <section className="py-32 px-10">
      <div className="max-w-6xl mx-auto bg-[#0f0f14] border border-gray-800 rounded-2xl p-12 flex items-center justify-between">
        {/* LEFT TEXT */}

        <div>
          <h2 className="text-4xl font-bold mb-3">Have any project in mind?</h2>

          <p className="text-gray-400">I'm available for freelancing</p>
        </div>

        {/* RIGHT BUTTON */}

        <div className="flex gap-5">
          <button className="border border-gray-500 px-8 py-3 rounded-lg hover:border-purple-500 transition">
            More Projects
          </button>

          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg flex items-center gap-2">
            {/* Email Icon */}
            <span>✉</span>
            Email Me
          </button>
        </div>
      </div>
    </section>
  );
}
