import { motion } from "framer-motion";
import photo1 from "@assets/WhatsApp_Image_2025-12-21_at_8.13.02_PM_1766328626458.jpeg";
import photo2 from "@assets/WhatsApp_Image_2025-12-21_at_8.23.48_PM_1766329006035.jpeg";
import photo3 from "@assets/WhatsApp_Image_2025-12-23_at_12.14.30_PM_1766472333206.jpeg";

const memories = [
  {
    id: 1,
    image: photo1,
    caption: "The first meet ☀️",
    rotation: -3,
    delay: 0,
  },
  {
    id: 2,
    image: photo2,
    caption: "us and our depression",
    rotation: 2,
    delay: 0.2,
  },
  {
    id: 3,
    image: photo3,
    caption: "our stupid convos 💬",
    rotation: -2,
    delay: 0.4,
  },
];

export function PolaroidGallery() {
  return (
    <section className="py-24 px-4 overflow-hidden bg-white/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Memory Lane</h2>
          <p className="font-hand text-xl text-muted-foreground">
            Just a few of my favorite moments...
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 justify-items-center">
          {memories.map((memory) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: memory.rotation }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: memory.delay }}
              className="bg-white p-4 pb-12 shadow-xl polaroid-shadow max-w-xs transform transition-all duration-300 relative group"
            >
              {/* Tape Effect */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 tape opacity-80 rotate-1" />

              <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-4 filter sepia-[0.2] cursor-pointer">
                <img
                  src={memory.image}
                  alt={memory.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <motion.p 
                className="font-hand text-2xl text-center text-gray-700 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                {memory.caption}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
