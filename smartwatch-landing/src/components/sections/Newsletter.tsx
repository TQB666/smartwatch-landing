import { useState } from "react";
import { subscribeNewsletter } from "../../services/newsletter";
import toast from "react-hot-toast";
const Newsletter = () => {
    const [name,setName]=useState("");

    const [email,setEmail]=useState("");

    const handleSubmit = async (e:React.FormEvent)=>{
        e.preventDefault();
        try{
            await subscribeNewsletter(
            name,
            email
            );
            toast.success("Subscribed Successfully");
            setName("");
            setEmail("");
        }catch{
            toast.error("Please try again");
        }
    }
    return (

        <section
            id="newsletter"
            className="mx-auto max-w-3xl px-6 py-28"
        >

            <div className="text-center">

                <h2 className="text-5xl font-bold">

                    Stay Updated

                </h2>

                <p className="mt-4 text-gray-400">

                    Subscribe to receive product news.

                </p>

            </div>

            <form className="mt-12 space-y-6" onSubmit={handleSubmit}>

                <input
                    placeholder="Your name"
                    className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    p-4
                    "
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />

                <input
                    placeholder="Email"
                    className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    p-4
                    "
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <button
                    className="
                    w-full
                    rounded-xl
                    bg-cyan-500
                    p-4
                    font-semibold
                    "
                >

                    Subscribe

                </button>

            </form>

        </section>

    );

};

export default Newsletter;