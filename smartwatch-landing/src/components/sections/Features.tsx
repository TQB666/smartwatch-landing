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


const Features = () => {

    return (

        <section
            id="features"
            className="mx-auto max-w-7xl px-6 py-28"
        >

            <div className="text-center">

                <p className="text-cyan-400">
                    Features
                </p>

                <h2 className="mt-2 text-5xl font-bold">
                    Powerful Features
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-gray-600 dark:text-gray-400">

                    Discover the future of wearable technology.

                </p>

            </div>

            <motion.div 
                className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
                initial={{
                    opacity:0,
                    y:50
                }}

                whileInView={{
                    opacity:1,
                    y:0
                }}

                viewport={{
                    once:true
                }}

                transition={{
                    duration:0.5
                }}
                >

                {features.map((feature) => {

                    const Icon = feature.icon;

                    return (

                        <div
                            key={feature.title}
                            className="
                            rounded-3xl
                            border
                            border-black/10 dark:border-white/10
                            bg-black/5 dark:bg-white/5
                            p-8
                            transition
                            duration-300
                            hover:-translate-y-3
                            hover:border-cyan-400
                            hover:bg-black/10 dark:bg-white/10
                            "
                        >

                            <Icon
                                size={44}
                                className="text-cyan-400"
                            />

                            <h3 className="mt-6 text-2xl font-semibold">

                                {feature.title}

                            </h3>

                            <p className="mt-4 text-gray-600 dark:text-gray-400">

                                {feature.description}

                            </p>

                        </div>

                    );

                })}

            </motion.div>

        </section>

    );

};

export default Features;