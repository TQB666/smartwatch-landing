import { motion } from "framer-motion";
const specs = [
    ["Display", "1.95 OLED"],
    ["Battery", "14 Days"],
    ["Weight", "32 g"],
    ["Processor", "Nova AI Chip"],
    ["Bluetooth", "5.4"],
    ["Waterproof", "IP68"]
];

const Specs = () => {

    return (

        <section
            id="specs"
            className="mx-auto max-w-6xl px-6 py-28"
        >

            <div className="text-center">

                <p className="text-cyan-400">

                    Specifications

                </p>

                <h2 className="mt-3 text-5xl font-bold">

                    Technical Specs

                </h2>

            </div>

            <div
                className="
                mt-16
                overflow-hidden
                rounded-3xl
                border
                border-black/10 dark:border-white/10
                bg-black/5 dark:bg-white/5
                "
            >

                {specs.map(([label, value]) => (

                    <motion.div
                        key={label}
                        className="
                        flex
                        justify-between
                        border-b
                        border-black/10 dark:border-white/10
                        px-8
                        py-6
                        "
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

                        <span className="text-gray-600 dark:text-gray-400">

                            {label}

                        </span>

                        <span className="font-semibold">

                            {value}

                        </span>

                    </motion.div>

                ))}

            </div>

        </section>

    );

};

export default Specs;