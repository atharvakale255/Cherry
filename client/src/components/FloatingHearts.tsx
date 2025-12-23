import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Heart {
  id: number;
  x: number;
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (Math.random() > 0.92) {
        const newHeart: Heart = {
          id: nextId,
          x: Math.random() * (window.innerWidth - 40),
        };
        setHearts(prev => [...prev, newHeart]);
        setNextId(prev => prev + 1);

        setTimeout(() => {
          setHearts(prev => prev.filter(h => h.id !== newHeart.id));
        }, 3000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nextId]);

  return (
    <>
      {hearts.map(heart => (
        <motion.div
          key={heart.id}
          initial={{ 
            y: window.innerHeight + 100, 
            opacity: 1, 
            x: heart.x,
            scale: 1
          }}
          animate={{ 
            y: -200, 
            opacity: 0,
            x: heart.x + (Math.random() - 0.5) * 100,
            scale: 0.8
          }}
          transition={{ 
            duration: 3, 
            ease: "easeOut" 
          }}
          className="fixed pointer-events-none text-4xl z-30"
          style={{ 
            left: heart.x, 
            bottom: 0 
          }}
        >
          ❤️
        </motion.div>
      ))}
    </>
  );
}
