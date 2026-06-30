import { S3_IMAGES } from "../../config/s3";

const images = S3_IMAGES.gallery;

const Gallery = () => {
    return (

        <section className="mx-auto max-w-7xl px-6 py-28">

            <div className="text-center">

                <p className="text-cyan-400">

                    Gallery

                </p>

                <h2 className="mt-3 text-5xl font-bold">

                    Crafted For Everyone

                </h2>

            </div>

            <div className="mt-20 grid gap-8 md:grid-cols-2">

                {images.map((img, index) => (

                    <div
                        key={index}
                        className="
                        overflow-hidden
                        rounded-3xl
                        bg-black/5 dark:bg-white/5
                        "
                    >

                        <img
                            src={img}
                            className="
                            h-full
                            w-full
                            transition
                            duration-500
                            hover:scale-110
                            "
                            loading="lazy"
                        />

                    </div>

                ))}

            </div>

        </section>

    );
};

export default Gallery;