import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; delay: number }>>([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (Math.random() > 0.95) {
        const newHeart = {
          id: nextId,
          x: Math.random() * window.innerWidth,
          delay: 0
        };
        setHearts(prev => [...prev, newHeart]);
        setNextId(nextId + 1);

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
          initial={{ y: window.innerHeight, opacity: 1, x: heart.x }}
          animate={{ y: -100, opacity: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="fixed pointer-events-none text-4xl"
          style={{ left: heart.x, bottom: 0 }}
        >
          ❤️
        </motion.div>
      ))}
    </>
  );
}
