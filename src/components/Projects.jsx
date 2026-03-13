import dauruang from "../assets/dauruang.jpg";
import { useState, useEffect } from "react";

export default function Projects() {
  const projects = [
    {
      title: "DaurUang Mobile Apps",
      highlight: "Daur",
      image: dauruang,
    },
    {
      title: "Ada Mekanik Mobile Apps",
      image: null,
    },
    {
      title: "InDorse Mobile Apps",
      image: null,
    },
  ];

  return (
    <section className="py-32 px-10 relative overflow-hidden">
      {/* TITLE WRAPPER */}

      <div className="relative flex justify-center mb-20">
        {/* BACKGROUND TEXT */}

        <h1 className="absolute text-[160px] font-black text-white/5 tracking-[15px] -top-28 select-none pointer-events-none">
          MY PROJECT
        </h1>

        {/* TITLE */}

        <h2 className="relative text-center text-4xl font-bold text-white">
          Latest Project
        </h2>
      </div>

      {/* PROJECT LIST */}

      <div className="max-w-6xl mx-auto space-y-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#0f0f14] p-10 rounded-2xl border border-gray-800 hover:border-purple-500 transition duration-300 shadow-lg hover:shadow-purple-500/10"
          >
            {/* IMAGE */}

            <div className="w-64 h-36 rounded-xl overflow-hidden flex items-center justify-center bg-[#1a1a22]">
              {project.image ? (
                <img
                  src={project.image}
                  alt="project"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-gray-500">Project Preview</div>
              )}
            </div>

            {/* TITLE */}

            <h3 className="text-2xl font-semibold text-white">
              {project.highlight ? (
                <>
                  <span className="text-green-400">{project.highlight}</span>
                  {project.title.replace(project.highlight, "")}
                </>
              ) : (
                project.title
              )}
            </h3>

            {/* BUTTON */}

            <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition px-6 py-3 rounded-lg font-medium">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
