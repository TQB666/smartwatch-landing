import { motion } from "framer-motion";
import { S3_IMAGES } from "../../config/s3";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />

      {/* Glow Effect */}
      <div className="absolute right-40 top-40 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Nội dung */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-28 md:grid-cols-2">

        {/* Left */}
        <div>
          <p className="mb-4 text-cyan-400">
            AI Powered Smart Watch
          </p>

          <h1 className="text-5xl font-extrabold leading-tight lg:text-7xl">
            NovaWatch X
          </h1>

          <p className="mt-6 max-w-lg text-lg text-gray-600 dark:text-gray-400">
            Experience the next generation wearable device powered by artificial intelligence.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold hover:scale-105 transition">
              Buy Now
            </button>

            <button className="rounded-xl border border-black/20 dark:border-white/20 px-8 py-4 hover:bg-black/10 dark:bg-white/10 transition">
              Learn More
            </button>
          </div>
          <div className="mt-12 flex gap-10">
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

          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <motion.img
            src={S3_IMAGES.hero}
            alt="NovaWatch"
            className="w-[420px]"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            loading="eager"
          />
        </div>

      </div>

    </section>
  );
};

export default Hero;