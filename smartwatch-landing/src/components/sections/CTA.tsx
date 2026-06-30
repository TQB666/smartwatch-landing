import { motion } from "framer-motion";

const CTA = () => {
    return (
        <section className="px-6 py-32 overflow-hidden">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mx-auto max-w-6xl rounded-[40px] bg-gradient-to-r from-cyan-500 to-blue-600 p-20 text-center relative shadow-2xl"
            >
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <h2 className="text-5xl font-bold text-white">
                        Ready To Experience The Future?
                    </h2>
                    <p className="mt-6 text-white/90 text-lg">
                        Discover AI-powered wearable technology today.
                    </p>
                    <motion.a
                        href="#shop"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block mt-10 rounded-xl bg-white px-10 py-4 font-bold text-black shadow-xl hover:shadow-2xl transition-shadow"
                    >
                        Buy Now
                    </motion.a>
                </motion.div>
                
                {/* Decorative background circles */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[40px] pointer-events-none">
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-[50%] -left-[10%] w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl" 
                    />
                    <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-[50%] -right-[10%] w-[400px] h-[400px] rounded-full bg-black/10 blur-3xl" 
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default CTA;