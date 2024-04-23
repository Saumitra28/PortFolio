import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send("service_spd5d5b", "template_3iw1epi", {
        from_name: form.name,
        to_name: "Saumitra Upadhyay",
        from_email: form.email,
        to_email: "saumitraupadhyay28@gmail.com",
        message: form.message,
      })
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-br from-[#100E09] to-[#1C1C1C] py-12"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="container mx-auto flex justify-center"
      >
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 bg-black-100 p-8 rounded-2xl">
          <p className="text-gray-500 text-xl">Get in touch</p>
          <h1 className="text-4xl font-bold inline border-b-4 border-[#00FFCA] text-white mb-8">
            Contact
          </h1>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 mt-8"
          >
            <label className="flex flex-col text-white">
              <span className="font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder-gray-400 text-black rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col text-white">
              <span className="font-medium mb-2">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder-gray-400 text-black rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col text-white">
              <span className="font-medium mb-2">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder-gray-400 text-black rounded-lg outline-none border-none font-medium"
              />
            </label>

            <div className="mx-auto">
              <button
                type="submit"
                className="bg-slate-200 py-3 px-8 rounded-xl border-gray-400 w-fit text-slate-700 font-bold shadow-md shadow-primary"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
      <p className="text-white text-center mt-8">
        © Developed by Saumitra
      </p>
    </div>
  );
};

export default Contact;
