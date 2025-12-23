import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export function CursorGlow() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none w-12 h-12 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full blur-3xl z-50 transition-all duration-100"
      style={{
        left: `${position.x - 24}px`,
        top: `${position.y - 24}px`,
      }}
    />
  );
}
