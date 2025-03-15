import React, { useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../App";
import "../styles/OptimizedBlockWeb.css";

class Block {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;

  constructor(x: number, y: number, size: number, color: string) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.color = color;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.size, this.size);
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 15;
    ctx.shadowColor = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update(): void {
    this.x += this.speedX;
    this.y += this.speedY;

    // Boundary check
    if (this.x <= 0 || this.x >= window.innerWidth - this.size) {
      this.speedX *= -1;
    }
    if (this.y <= 0 || this.y >= window.innerHeight - this.size) {
      this.speedY *= -1;
    }
  }
}

const NonInteractiveBlockWeb: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let blocksArray: Block[] = [];
    const baseDensity = 0.00005; // Adjust for the number of blocks
    let animationFrameId: number;
    
    // Get theme colors
    const blockColor = theme === 'dark' ? "#15CFF1" : "#0D7CE9"; // Use secondary-blue for dark, primary-blue for light

    // Initialize canvas size
    const resizeCanvas = (): void => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Recalculate blocks based on screen size
      const blockCount = Math.floor(canvas.width * canvas.height * baseDensity);
      
      // Clear existing blocks
      blocksArray = [];
      
      // Create new blocks
      for (let i = 0; i < blockCount; i++) {
        const size = Math.random() * 5 + 2;
        const x = Math.random() * (canvas.width - size);
        const y = Math.random() * (canvas.height - size);
        blocksArray.push(new Block(x, y, size, blockColor));
      }
    };

    // Draw lines between blocks
    const drawLines = (): void => {
      for (let i = 0; i < blocksArray.length; i++) {
        for (let j = i + 1; j < blocksArray.length; j++) {
          const dx = blocksArray[i].x - blocksArray[j].x;
          const dy = blocksArray[i].y - blocksArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            // Use rgba with the theme color
            const colorBase = theme === 'dark' ? "21, 207, 241" : "13, 124, 233"; // RGB values for the colors
            ctx.strokeStyle = `rgba(${colorBase}, ${0.15 - distance / 1000})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(blocksArray[i].x, blocksArray[i].y);
            ctx.lineTo(blocksArray[j].x, blocksArray[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    };

    // Animation loop
    const animate = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw blocks
      blocksArray.forEach(block => {
        block.update();
        block.draw(ctx);
      });
      
      // Draw connecting lines
      drawLines();
      
      animationFrameId = requestAnimationFrame(animate);
    };

    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
    
    // Initialize
    resizeCanvas();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]); // Added theme as a dependency to re-render when theme changes

  return <canvas ref={canvasRef} className="block-web-canvas"></canvas>;
};

export default NonInteractiveBlockWeb;