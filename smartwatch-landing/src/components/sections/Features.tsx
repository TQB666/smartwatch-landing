import {
    HeartPulse,
    BatteryCharging,
    MapPinned,
    Bot
} from "lucide-react";
import { motion } from "framer-motion";
const features = [
    {
        icon: HeartPulse,
        title: "Health Monitoring",
        description:
            "Track heart rate, blood oxygen and sleep quality in real time."
    },
    {
        icon: BatteryCharging,
        title: "Fast Charging",
        description:
            "Charge from 0% to 80% in only 30 minutes."
    },
    {
        icon: MapPinned,
        title: "Dual GPS",
        description:
            "Accurate navigation with dual-band GPS."
    },
    {
        icon: Bot,
        title: "AI Assistant",
        description:
            "Your personal AI companion on your wrist."
    }
];


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

const Features = () => {
    return (
        <section id="features" className="mx-auto max-w-7xl px-6 py-28 overflow-hidden">
            <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-cyan-400">Features</p>
                <h2 className="mt-2 text-5xl font-bold">Powerful Features</h2>
                <p className="mx-auto mt-6 max-w-2xl text-gray-600 dark:text-gray-400">
                    Discover the future of wearable technology.
                </p>
            </motion.div>

            <motion.div 
                className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                        <motion.div
                            key={feature.title}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative rounded-3xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-8 transition-colors duration-300 hover:border-cyan-400 hover:bg-black/10 dark:hover:bg-white/10 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 transition-colors duration-300" />
                            <motion.div 
                                className="inline-block"
                                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Icon size={44} className="text-cyan-400 relative z-10" />
                            </motion.div>
                            <h3 className="mt-6 text-2xl font-semibold relative z-10">{feature.title}</h3>
                            <p className="mt-4 text-gray-600 dark:text-gray-400 relative z-10">{feature.description}</p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default Features;