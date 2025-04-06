import React, { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas dimensions to match window
    const setDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", setDimensions);
    setDimensions();

    // Create curved lines
    const lines = [];
    const lineCount = 15;

    for (let i = 0; i < lineCount; i++) {
      lines.push({
        startX: Math.random() * canvas.width,
        endX: Math.random() * canvas.width,
        y: i * (canvas.height / lineCount),
        height: canvas.height,
        curve: Math.random() * 200 - 100,
        width: 1,
        speed: 0.1 + Math.random() * 0.2,
        opacity: 0.05 + Math.random() * 0.05,
      });
    }

    // Animation function
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      lines.forEach((line) => {
        // Draw curved line
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${line.opacity})`;
        ctx.lineWidth = line.width;

        ctx.moveTo(line.startX, 0);
        ctx.bezierCurveTo(
          line.startX + line.curve,
          line.height / 3,
          line.endX - line.curve,
          (line.height / 3) * 2,
          line.endX,
          line.height
        );

        ctx.stroke();

        // Move line position
        line.startX += line.speed;
        line.endX += line.speed;

        // Reset position if off screen
        if (line.startX > canvas.width + 200) {
          line.startX = -200;
          line.endX = -200 + (line.endX - line.startX);
        }
      });

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    // Cleanup
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", setDimensions);
    };
  }, []);

  return (
    <div
      className="animated-background-container"
      style={{ position: "relative" }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />
      <div
        className="content"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>
          Free React Components
        </h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.7 }}>
          Beautifully designed, ready to copy and paste
        </p>

        {/* Search bar similar to the image */}
        <div
          style={{
            margin: "2rem 0",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "0.5rem",
              padding: "0.75rem 1rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: "0.5rem", opacity: 0.5 }}
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search..."
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "1rem",
                width: "100%",
                outline: "none",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
