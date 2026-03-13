import {
  FaBriefcase,
  FaCommentDots,
  FaThumbsUp,
  FaCheckCircle,
} from "react-icons/fa";

export default function WhyHire() {
  return (
    <section className="py-32 px-10 relative">
      {/* Background Text */}

      <h1 className="absolute text-[150px] font-bold text-white/5 top-10 left-1/2 -translate-x-1/2 pointer-events-none">
        HY HIRE ME
      </h1>

      {/* Title */}

      <h2 className="text-4xl font-bold text-center mb-20">Why Hire Me</h2>

      {/* Cards */}

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 text-center">
        {/* Item 1 */}

        <div>
          <div className="w-40 h-40 mx-auto rounded-full border border-purple-500 flex items-center justify-center mb-8 relative">
            <div className="absolute w-44 h-44 border border-gray-700 rounded-full"></div>

            <FaBriefcase className="text-purple-500 text-4xl" />
          </div>

          <h3 className="text-xl font-semibold mb-4">Workaholic</h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            I'm a kind of person who can't just stand around and doing nothing.
            I have a tendency to do something productive.
          </p>
        </div>

        {/* Item 2 */}

        <div>
          <div className="w-40 h-40 mx-auto rounded-full border border-purple-500 flex items-center justify-center mb-8 relative">
            <div className="absolute w-44 h-44 border border-gray-700 rounded-full"></div>

            <FaCommentDots className="text-purple-500 text-4xl" />
          </div>

          <h3 className="text-xl font-semibold mb-4">Communicative</h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            I have a broad understanding of verbal vocabulary. Therefore, I can
            convey a message well to the receiver.
          </p>
        </div>

        {/* Item 3 */}

        <div>
          <div className="w-40 h-40 mx-auto rounded-full border border-purple-500 flex items-center justify-center mb-8 relative">
            <div className="absolute w-44 h-44 border border-gray-700 rounded-full"></div>

            <FaThumbsUp className="text-purple-500 text-4xl" />
          </div>

          <h3 className="text-xl font-semibold mb-4">Cooperative</h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            Behind the successful project, there's a great team. I can build a
            good cooperation and remain consistent with the goal.
          </p>
        </div>

        {/* Item 4 */}

        <div>
          <div className="w-40 h-40 mx-auto rounded-full border border-purple-500 flex items-center justify-center mb-8 relative">
            <div className="absolute w-44 h-44 border border-gray-700 rounded-full"></div>

            <FaCheckCircle className="text-purple-500 text-4xl" />
          </div>

          <h3 className="text-xl font-semibold mb-4">Perfectionist</h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            I have a strong intuition. I have remained consistent with high
            quality standards to present a most worthy result.
          </p>
        </div>
      </div>
    </section>
  );
}
