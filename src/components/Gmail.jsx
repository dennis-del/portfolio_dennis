import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { toast } from 'react-hot-toast';

function Gmail() {
    const formRef = useRef(null);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const name = formData.get("name").trim();
        const email = formData.get("email").trim();
        const message = formData.get("message").trim();

        if (!name || !email || !message) {
            toast.error("Please fill out all fields before submitting.");
            return;
        }

        formData.append("access_key", "9f109621-d682-4367-ab3d-6ac6ce8f2ea4");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        }).then((res) => res.json());

        if (res.success) {
            toast.success("Email sent successfully!");
            formRef.current.reset(); // Clear the form fields
        } else {
            toast.error("Submission failed! Please try again.");
        }
    };

    return (
        <div className="pb-16">
            <Helmet>
                <title>Dennis James Portfolio</title>
                <meta name="description" content="Dennis James Portfolio" />
                <meta name="keywords" content="Dennis James Portfolio" />
            </Helmet>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-12 text-center text-4xl"
            >
                Get in Touch
            </motion.h2>
            <div className="flex justify-center">
                <div className="w-full max-w-lg p-8 rounded-lg shadow-lg bg-opacity-50">
                    <form onSubmit={onSubmit} ref={formRef} className="space-y-6">
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: -100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <label
                                htmlFor="name"
                                className="block text-lg font-semibold text-gray-600"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                name="name"
                                className="w-full mt-2 p-3 bg-transparent border border-gray-300 rounded-full shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-500 text-white placeholder-gray-400"
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: -100 }}
                            transition={{ duration: 1 }}
                        >
                            <label
                                htmlFor="email"
                                className="block text-lg font-semibold text-gray-600"
                            >
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                name="email"
                                className="w-full mt-2 p-3 bg-transparent border border-gray-300 rounded-full shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-500 text-white placeholder-gray-400"
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: -100 }}
                            transition={{ duration: 1.5 }}
                        >
                            <label
                                htmlFor="message"
                                className="block text-lg font-semibold text-gray-600"
                            >
                                Write your message here
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="8"
                                placeholder="Enter your message"
                                className="w-full mt-2 p-3 bg-transparent border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-500 text-white placeholder-gray-400"
                            ></textarea>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: -100 }}
                            transition={{ duration: 0.5 }}
                            className="flex justify-center"
                        >
                            <button
                                type="submit"
                                className="w-1/3 py-3 bg-white text-black rounded-full shadow-md hover:bg-gray-100 transition-colors"
                            >
                                Submit Now
                            </button>
                        </motion.div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Gmail;
