/* eslint-disable security/detect-object-injection */
import React from "react";
import { useEffect, useRef } from "react";
import "../styles/OptimizedBlockWeb.css"; // External CSS file

const NonInteractiveBlockWeb = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let blocksArray = [];
    const baseDensity = 0.00005; // Adjust for the number of blocks
    let animationFrameId;

    // Block class
    class Block {
      constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = "#15CFF1";
      }

      draw() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.size, this.size);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.closePath();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce blocks within canvas
        if (this.x > canvas.width || this.x < 0) {
          this.speedX *= -1;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY *= -1;
        }

        this.draw();
      }
    }

    // Calculate number of blocks dynamically
    const calculateBlockCount = () => {
      const area = canvas.width * canvas.height;
      return Math.floor(area * baseDensity); // More area = more blocks
    };

    // Initialize blocks safely
    const initBlocks = () => {
      blocksArray = [];
      const numBlocks = calculateBlockCount();
      for (let i = 0; i < numBlocks; i++) {
        const size = Math.random() * 15 + 5; // Block size range: 5px to 20px
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        blocksArray.push(new Block(x, y, size));
      }
    };

    // Connect blocks with safe access
    const connectBlocks = () => {
      for (let i = 0; i < blocksArray.length; i++) {
        for (let j = i + 1; j < blocksArray.length; j++) { // Avoid redundant calculations
          const blockA = blocksArray[i];
          const blockB = blocksArray[j];

          if (blockA && blockB) { // Ensure safe access
            const dx = blockA.x - blockB.x;
            const dy = blockA.y - blockB.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              ctx.strokeStyle = `rgba(0, 255, 204, ${1 - distance / 150})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(blockA.x + blockA.size / 2, blockA.y + blockA.size / 2);
              ctx.lineTo(blockB.x + blockB.size / 2, blockB.y + blockB.size / 2);
              ctx.stroke();
            }
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const block of blocksArray) {
        if (block) block.update(); // Ensure block exists before updating
      }
      connectBlocks();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Debounce function for resize
    const debounce = (func, delay) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
      };
    };

    // Resize handler with safe access
    const handleResize = debounce(() => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initBlocks();
      }
    }, 200);

    // Initial setup
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initBlocks();
    animate();

    // Event listeners
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas-background" />;
};

export default NonInteractiveBlockWeb;
