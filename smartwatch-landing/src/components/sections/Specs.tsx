import { motion } from "framer-motion";

const specs = [
    ["Display", "1.95 OLED"],
    ["Battery", "14 Days"],
    ["Weight", "32 g"],
    ["Processor", "Nova AI Chip"],
    ["Bluetooth", "5.4"],
    ["Waterproof", "IP68"]
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

const Specs = () => {
    return (
        <section id="specs" className="mx-auto max-w-6xl px-6 py-28">
            <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-cyan-400">Specifications</p>
                <h2 className="mt-3 text-5xl font-bold">Technical Specs</h2>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mt-16 overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5"
            >
                {specs.map(([label, value], index) => (
                    <motion.div
                        key={label}
                        variants={itemVariants}
                        whileHover={{ backgroundColor: "rgba(6, 182, 212, 0.05)", paddingLeft: "2.5rem" }}
                        transition={{ duration: 0.2 }}
                        className={`flex justify-between px-8 py-6 transition-all ${
                            index !== specs.length - 1 ? 'border-b border-black/10 dark:border-white/10' : ''
                        }`}
                    >
                        <span className="text-gray-600 dark:text-gray-400">{label}</span>
                        <span className="font-semibold text-cyan-600 dark:text-cyan-400">{value}</span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Specs;