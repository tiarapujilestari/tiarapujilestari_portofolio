import { useRef, useEffect } from "react";

export default function NeuralCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const nodes = [];

    const MAX_NODES = 20;

    window.addEventListener("mousemove", (e) => {
      nodes.push({
        x: e.clientX,
        y: e.clientY,
      });

      if (nodes.length > MAX_NODES) {
        nodes.shift();
      }
    });

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node, i) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#a855f7";
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const dx = node.x - nodes[j].x;
          const dy = node.y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = "rgba(168,85,247,0.25)";
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 50,
      }}
    />
  );
}
