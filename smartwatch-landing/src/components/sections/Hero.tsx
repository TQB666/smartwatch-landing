import { motion, useScroll, useTransform } from "framer-motion";
import { S3_IMAGES } from "../../config/s3";

const Hero = () => {
  const { scrollY } = useScroll();

  // Parallax effects
  const textY = useTransform(scrollY, [0, 800], [0, 200]);
  const imageY = useTransform(scrollY, [0, 800], [0, -150]);
  const glowY = useTransform(scrollY, [0, 800], [0, 300]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />

      {/* Glow Effect with Parallax */}
      <motion.div 
        style={{ y: glowY }}
        className="absolute right-40 top-40 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" 
      />

      {/* Nội dung */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-28 md:grid-cols-2">
        {/* Left: Text with Parallax */}
        <motion.div style={{ y: textY }}>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-cyan-400"
          >
            AI Powered Smart Watch
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-extrabold leading-tight lg:text-7xl"
          >
            NovaWatch X
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 max-w-lg text-lg text-gray-600 dark:text-gray-400"
          >
            Experience the next generation wearable device powered by artificial intelligence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex gap-4"
          >
            <a href="#shop" className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black hover:scale-105 transition">
              Buy Now
            </a>

            <button className="rounded-xl border border-black/20 dark:border-white/20 px-8 py-4 hover:bg-black/10 dark:bg-white/10 transition">
              Learn More
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex gap-10"
          >
            <div>
              <h2 className="text-3xl font-bold">14</h2>
              <p className="text-gray-500">Days Battery</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">IP68</h2>
              <p className="text-gray-500">Waterproof</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">AI</h2>
              <p className="text-gray-500">Assistant</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Image with Parallax & Floating */}
        <motion.div 
          style={{ y: imageY }}
          className="flex justify-center"
        >
          <motion.img
            src={S3_IMAGES.hero}
            alt="NovaWatch"
            className="w-[420px]"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            loading="eager"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;