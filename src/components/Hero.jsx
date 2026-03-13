import profile from "../assets/profile.jpeg";
import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useState, useEffect } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particlesTrail, setParticlesTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

      const newParticle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setParticlesTrail((prev) => [...prev.slice(-40), newParticle]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="max-w-7xl mx-auto px-10 py-20 grid md:grid-cols-2 items-center relative overflow-hidden">
      {/* BACKGROUND PARTICLES */}

      <Particles
        id="backgroundParticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          particles: {
            number: { value: 60 },
            color: { value: "#a855f7" },
            links: {
              enable: true,
              color: "#a855f7",
              distance: 140,
              opacity: 0.3,
            },
            move: {
              enable: true,
              speed: 1,
            },
            size: {
              value: { min: 1, max: 3 },
            },
            opacity: {
              value: 0.4,
            },
          },
        }}
        className="absolute top-0 left-0 w-full h-full -z-20"
      />

      {/* MOUSE GLOW */}

      <div
        className="pointer-events-none fixed w-64 h-64 rounded-full blur-3xl bg-purple-600 opacity-20 transition-all duration-150"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%) scale(1.2)",
        }}
      />

      {/* PARTICLE TRAIL */}

      {particlesTrail.map((p) => (
        <div
          key={p.id}
          className="pointer-events-none fixed w-2 h-2 bg-purple-400 rounded-full animate-ping"
          style={{
            left: p.x,
            top: p.y,
          }}
        />
      ))}

      {/* LEFT CONTENT */}

      <div className="relative z-10">
        <p className="text-gray-400 text-xl mb-3">Hello Everyone</p>

        {/* TITLE AREA */}

        <div className="space-y-3 mb-6">
          <p className="text-xl text-gray-400 tracking-wide">I am</p>

          {/* FIXED HEIGHT ANIMATION AREA */}

          <div className="min-h-[120px] flex items-start">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent leading-tight">
              <TypeAnimation
                sequence={[
                  "TIARA PUJILESTARI",
                  2000,
                  "FRONTEND DEVELOPER",
                  2000,
                  "UI/UX DESIGNER",
                  2000,
                  "CREATIVE DESIGNER",
                  2000,
                ]}
                speed={60}
                repeat={Infinity}
                cursor={true}
              />
            </h1>
          </div>
        </div>

        {/* SUBTITLE */}

        <p className="text-gray-400 mb-6">UI / UX Design Enthusiast</p>

        <div className="w-16 h-[2px] bg-gray-600 mb-6"></div>

        {/* DESCRIPTION */}

        <p className="text-gray-400 leading-relaxed max-w-xl mb-10">
          I'm a person who has a keen interest in the design layout. I think
          presenting an attractive design is a matter of concern in developing a
          branding of products. To create a good design, I focus on proper
          composition and visual decoration details in order to make it more
          professional.
        </p>

        {/* BUTTON */}

        <div className="flex gap-5">
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium transition">
            Download CV
          </button>

          <button className="border border-gray-600 px-6 py-3 rounded-lg hover:border-purple-500 transition">
            More
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}

      <div className="relative flex justify-center">
        {/* GLOW */}

        <div className="absolute w-96 h-96 bg-purple-600 blur-[150px] opacity-30 rounded-full"></div>

        {/* DECORATION */}

        <div className="absolute right-16 top-10 w-12 h-12 border border-purple-500 rounded-full"></div>

        <div className="absolute right-32 top-0 text-purple-500 text-3xl">
          +
        </div>

        {/* PROFILE IMAGE */}

        <img
          src={profile}
          className="relative w-80 z-10 hover:scale-105 transition duration-500 rounded-lg"
        />
      </div>

      {/* SOCIAL MEDIA */}

      <div className="absolute bottom-10 right-20 flex items-center gap-5">
        <p className="text-gray-400">Find Me On</p>

        <div className="flex gap-4">
          <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center hover:scale-110 transition">
            <FaFacebookF />
          </div>

          <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center hover:scale-110 transition">
            <FaInstagram />
          </div>

          <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center hover:scale-110 transition">
            <FaWhatsapp />
          </div>

          <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center hover:scale-110 transition">
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </section>
  );
}
