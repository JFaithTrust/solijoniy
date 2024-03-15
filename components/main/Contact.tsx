"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { slideIn, staggerContainer } from "@/utils/motion";
import EarthCanvas from "../sub/canvas/EarthCanvas";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ivgnmgg",
        "template_1j531kg",
        {
          from_name: form.name,
          to_name: "Jahongir",
          from_email: form.email,
          to_email: "jahongirsolijoniy@gmail.com",
          message: form.message,
        },
        "kr5X4BE0D74mmD-hc"
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Thank you. I will get back to you as soon as possible. 👌"
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          toast.error("Ahh, something went wrong. Please try again. 🤯");
        }
      );
  };

  return (
    <motion.div
      id="contact"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="xl:mt-12 flex lg:flex-row flex-col-reverse lg:gap-10 overflow-hidden relative z-20 h-full w-full items-center justify-center mb-20"
    >
      <ToastContainer position="bottom-right" />
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 p-8 rounded-2xl md:w-[540px] w-fit"
      >
        <p
          className={
            "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
          }
        >
          Get in touch
        </p>
        <h3
          className={
            "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"
          }
        >
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:h-auto md:h-[550px] h-[350px] md:w-[560px] w-fit"
      >
        <EarthCanvas />
      </motion.div>
    </motion.div>
  );
};

export default Contact;
