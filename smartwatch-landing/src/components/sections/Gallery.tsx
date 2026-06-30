import { S3_IMAGES } from "../../config/s3";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = S3_IMAGES.gallery;

const Gallery = () => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yLeft = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const yRight = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
        <section ref={containerRef} className="mx-auto max-w-7xl px-6 py-28 overflow-hidden">
            <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-cyan-400 font-semibold tracking-wide uppercase">Gallery</p>
                <h2 className="mt-3 text-5xl font-bold">Crafted For Everyone</h2>
            </motion.div>

            <div className="mt-20 grid gap-8 md:grid-cols-2">
                {/* Left Column */}
                <motion.div style={{ y: yLeft }} className="flex flex-col gap-8">
                    {images.filter((_, idx) => idx % 2 === 0).map((img, index) => (
                        <motion.div
                            key={`left-${index}`}
                            className="overflow-hidden rounded-3xl bg-white dark:bg-white/95 shadow-lg relative group"
                            whileHover={{ scale: 0.98 }}
                        >
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                            <img
                                src={img}
                                className="h-full w-full object-cover mix-blend-multiply transition duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Right Column */}
                <motion.div style={{ y: yRight }} className="flex flex-col gap-8 md:mt-24">
                    {images.filter((_, idx) => idx % 2 !== 0).map((img, index) => (
                        <motion.div
                            key={`right-${index}`}
                            className="overflow-hidden rounded-3xl bg-white dark:bg-white/95 shadow-lg relative group"
                            whileHover={{ scale: 0.98 }}
                        >
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                            <img
                                src={img}
                                className="h-full w-full object-cover mix-blend-multiply transition duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;