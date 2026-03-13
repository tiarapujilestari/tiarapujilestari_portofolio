import { SiCanva, SiJavascript, SiTailwindcss } from "react-icons/si";
import { FaFileWord, FaFileExcel, FaCode } from "react-icons/fa";

export default function Skills() {
  const skills = [
    {
      icon: <FaCode size={50} />,
      name: "VS Code",
    },
    {
      icon: <SiCanva size={50} />,
      name: "Canva",
    },
    {
      icon: <FaFileWord size={50} />,
      name: "Microsoft Word",
    },
    {
      icon: <FaFileExcel size={50} />,
      name: "Microsoft Excel",
    },
    {
      icon: <SiJavascript size={50} />,
      name: "JavaScript",
    },
    {
      icon: <SiTailwindcss size={50} />,
      name: "Tailwind CSS",
    },
  ];

  return (
    <section className="py-32 px-10 relative">
      {/* Background Text */}

      <h1 className="absolute text-[140px] font-bold text-white/5 top-10 left-1/2 -translate-x-1/2 pointer-events-none">
        AND SKILLS
      </h1>

      {/* Title */}

      <h2 className="text-4xl font-bold text-center mb-20">Tools and Skills</h2>

      {/* Cards */}

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 lg:grid-cols-6 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#1a1a1f] p-10 rounded-3xl flex flex-col items-center justify-center text-purple-400 shadow-lg hover:scale-105 transition duration-300"
          >
            {skill.icon}

            <p className="mt-4 text-sm text-gray-300 text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
