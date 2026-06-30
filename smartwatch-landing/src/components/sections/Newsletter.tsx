import { subscribeNewsletter } from "../../services/newsletter";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { newsletterSchema } from "../../validations/newsletter.schema";
import type { NewsletterForm } from "../../validations/newsletter.schema";

const Newsletter = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<NewsletterForm>({
        resolver: zodResolver(newsletterSchema),
    });

    const onSubmit = async (data: NewsletterForm) => {
        try {
            await subscribeNewsletter(data.name, data.email);
            toast.success("Subscribed Successfully");
            reset();
        } catch (error: any) {
            toast.error(error.message || "Please try again");
        }
    }

    return (
        <section id="newsletter" className="mx-auto max-w-3xl px-6 py-28">
            <div className="text-center">
                <h2 className="text-5xl font-bold">Stay Updated</h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">Subscribe to receive product news.</p>
            </div>

            <form className="mt-12 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        {...register("name")}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-4 text-gray-900 dark:text-white"
                    />
                    {errors.name && <p className="mt-1 text-red-500">{errors.name.message}</p>}
                </div>
                
                <div>
                    <input
                        {...register("email")}
                        placeholder="Email"
                        className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-4 text-gray-900 dark:text-white"
                    />
                    {errors.email && <p className="mt-1 text-red-500">{errors.email.message}</p>}
                </div>

                <button
                    className="w-full rounded-xl bg-cyan-500 p-4 font-semibold text-black disabled:opacity-50"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Submitting..." : "Subscribe"}
                </button>
            </form>
        </section>
    );
};

export default Newsletter;