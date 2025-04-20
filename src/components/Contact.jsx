import React, { useRef, useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatusMessage("Message sent successfully! Thank you for your time.");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMessage("Failed to send message. Try again.");
    }

    setIsSending(false);
  };
  return (
    <section className="bg-[rgb(5,7,9)]  text-[#DDDDDD] py-24 lg:pt-24 pt-12">
      <div className="containers lg:grid  lg:grid-cols-2  gap-10 items-center">
        <div className="mb-10 order-2 ">
          <div className="flex items-center gap-5 mb-10">
            <div className="border rounded-full bg-[#6c6eff] w-fit p-2">
              <IoCallOutline className="text-2xl lg:text-4xl " />
            </div>
            <div>
              <p className="text-base lg:text-lg font-semibold ">Phone</p>
              <p className="text-base lg:text-lg font-medium ">
                +2348160203795
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 mb-10">
            <div className="border rounded-full bg-[#6c6eff] w-fit p-2">
              <FiMail className="text-2xl lg:text-4xl" />
            </div>
            <div>
              <p className="text-base lg:text-lg font-semibold ">Email</p>
              <p className="text-base lg:text-lg font-medium ">
                alowoesintoluwalase@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="border rounded-full bg-[#6c6eff] w-fit p-2">
              <CiLocationOn className="text-2xl lg:text-4xl" />
            </div>
            <div>
              <p className="text-base lg:text-lg font-semibold ">Address</p>
              <p className="text-base lg:text-lg font-medium ">
                Abeokuta Ogun-state Nigeria
              </p>
            </div>
          </div>
        </div>

        <div className="border-0 p-5 lg:p-10 order-1 bg-gradient-to-r from-[#000428] to-[#020330] rounded-lg ">
          <div>
            <motion.h1
              className="bg-gradient-to-r from-[#6675ff] to-[#0006ad] text-transparent bg-clip-text text-3xl lg:text-6xl text-center font-extrabold py-5   "
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Shape the future
            </motion.h1>
            <motion.p
              className="text-center text-base lg:text-lg font-semibold  pb-10   "
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              I create elegant, simple designs and code with passion."
            </motion.p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className=" lg:flex gap-5">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                className="w-full p-2 border rounded mb-5 lg:mb-0  bg-[rgb(8,11,14)] border-[#6c6eff] text-[#ffffff] outline-none"
              />
              <input
                type="text"
                name="second_name"
                placeholder="Second Name"
                required
                className="w-full p-2 border rounded  bg-[rgb(8,11,14)] border-[#6c6eff] text-[#ffffff] outline-none"
              />
            </div>
            <div className="lg:flex gap-5">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-2 border rounded mb-5 lg:mb-0  bg-[rgb(8,11,14)] border-[#6c6eff] text-[#ffffff] outline-none"
              />
              <input
                type="number"
                name="user_phone"
                placeholder="Your Phone Number"
                required
                className="w-full p-2 border rounded  bg-[rgb(8,11,14)] border-[#6c6eff] text-[#ffffff] outline-none"
              />
            </div>

            <select
              name="service"
              required
              className="w-full p-2 border rounded bg-[rgb(8,11,14)]  border-[#6c6eff] outline-none"
            >
              <option
                className="bg-[rgb(8,11,14)] border-[#6c6eff]   "
                value="Select Option"
              >
                Select a service
              </option>
              <option
                className="bg-[rgb(8,11,14)] border-[#6c6eff]  "
                value="Video Editing"
              >
                Video Editing
              </option>
              <option value="frontend_development">Web Development</option>
            </select>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-2 border rounded bg-[rgb(8,11,14)] border-[#6c6eff] outline-none"
            ></textarea>

            <button
              type="submit"
              className="text-white border px-5 py-2 rounded-2xl bg-gradient-to-l from-[#000428] to-[#040762] text-lg border-[#2137ff] font-semibold mt-6 "
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {statusMessage && (
              <p className="mt-2 text-center text-sm text-green-600">
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
