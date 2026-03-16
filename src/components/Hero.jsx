import profile from "../assets/profile.jpeg";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [matrixBackground, setMatrixBackground] = useState([]);

  /* MOUSE GLOW */

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  /* FLOATING MATRIX BACKGROUND */

  useEffect(() => {
    const plusArray = [];

    for (let i = 0; i < 40; i++) {
      plusArray.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 25 + 12,
        duration: Math.random() * 15 + 10,
      });
    }

    setMatrixBackground(plusArray);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* MATRIX BACKGROUND */}

      <div className="absolute inset-0 pointer-events-none">
        {matrixBackground.map((p) => (
          <div
            key={p.id}
            className="cyber-plus"
            style={{
              left: p.x,
              top: p.y,
              fontSize: p.size,
              animationDuration: `${p.duration}s`,
              position: "absolute",
            }}
          >
            +
          </div>
        ))}
      </div>

      {/* MOUSE GLOW */}

      <div
        className="pointer-events-none fixed w-72 h-72 rounded-full blur-3xl bg-purple-600 opacity-20"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* MAIN CONTAINER */}

      <div className="relative z-10 w-full max-w-7xl px-10 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT TEXT */}

        <div className="flex flex-col justify-center">
          <p className="text-gray-400 text-xl mb-2">Hello Everyone</p>

          <p className="text-gray-400 text-lg mb-3">I am</p>

          {/* LOCK HEIGHT AREA */}

          <div className="min-h-[140px] flex items-start">
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
                cursor
              />
            </h1>
          </div>

          <p className="text-gray-400 mb-6">UI / UX Design Enthusiast</p>

          <div className="w-16 h-[2px] bg-gray-600 mb-6"></div>

          <p className="text-gray-400 leading-relaxed max-w-xl mb-10">
            I'm a person who has a keen interest in the design layout.
          </p>

          <div className="flex gap-5">
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium">
              Download CV
            </button>

            <button className="border border-gray-600 px-6 py-3 rounded-lg hover:border-purple-500">
              More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute w-96 h-96 bg-purple-600 blur-[150px] opacity-30 rounded-full"></div>

            <img
              src={profile}
              className="relative w-80 rounded-xl hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>

      {/* SOCIAL */}

      <div className="absolute bottom-10 right-20 flex items-center gap-5 z-10">
        <p className="text-gray-400">Find Me On</p>

        <div className="flex gap-4">
          <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center">
            <FaFacebookF />
          </div>

          <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center">
            <FaInstagram />
          </div>

          <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center">
            <FaWhatsapp />
          </div>

          <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center">
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </section>
  );
}
