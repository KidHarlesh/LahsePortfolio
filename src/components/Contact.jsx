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
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsSuccess(true);
      setStatusMessage("Message sent! I'll get back to you soon.");
      form.current.reset();
    } catch (error) {
      setIsSuccess(false);
      setStatusMessage("Failed to send message. Please try again.");
    }

    setIsSending(false);
  };

  const contactDetails = [
    {
      icon: <IoCallOutline className="text-2xl lg:text-3xl" />,
      label: "Phone",
      value: "+234 81 0602 8083",
    },
    {
      icon: <FiMail className="text-2xl lg:text-3xl" />,
      label: "Email",
      value: "alowoesintoluwalase@gmail.com",
    },
    {
      icon: <CiLocationOn className="text-2xl lg:text-3xl" />,
      label: "Location",
      value: "Abeokuta, Ogun State, Nigeria",
    },
  ];

  const inputClass =
    "w-full p-3.5 border border-slate-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-800 text-slate-900 dark:text-slate-50 placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 transition-all duration-200";

  return (
    <section className="bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-slate-50 py-12 lg:py-24" id="Contact">
      <div className="container lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Contact info */}
        <div className="mb-12 lg:mb-0 order-2">
          <motion.h2
            className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mb-8"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h2>
          <div className="flex flex-col gap-8">
            {contactDetails.map(({ icon, label, value }) => (
              <motion.div
                key={label}
                className="flex items-center gap-5"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full p-4 flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-200 uppercase tracking-wide">{label}</p>
                  <p className="text-lg font-semibold text-slate-900 dark:text-slate-50">{value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <div className="border border-slate-200 dark:border-zinc-800 p-8 lg:p-12 order-1 bg-white dark:bg-zinc-900 rounded-3xl shadow-lg shadow-slate-200/50 dark:shadow-none">
          <motion.h1
            className="text-3xl lg:text-4xl font-extrabold text-center text-slate-900 dark:text-slate-50 pb-3"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Shape the future
          </motion.h1>
          <motion.p
            className="text-center text-base font-medium text-slate-500 dark:text-slate-200 pb-10"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            I create elegant, functional designs and code with passion.
          </motion.p>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div className="lg:flex gap-5">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                className={`${inputClass} mb-5 lg:mb-0`}
              />
              <input
                type="text"
                name="second_name"
                placeholder="Last Name"
                required
                className={inputClass}
              />
            </div>
            <div className="lg:flex gap-5">
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                className={`${inputClass} mb-5 lg:mb-0`}
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="Phone Number"
                className={inputClass}
              />
            </div>

            <select
              name="service"
              required
              className={`${inputClass} cursor-pointer`}
              defaultValue=""
            >
              <option value="" disabled>Select a service</option>
              <option value="Video Editing">Video Editing</option>
              <option value="frontend_development">Web Development</option>
            </select>

            <textarea
              name="message"
              rows="5"
              placeholder="Your message..."
              required
              className={`${inputClass} resize-none`}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white border-2 border-blue-600 py-3.5 rounded-xl text-lg font-bold hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 shadow-md shadow-blue-200 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {statusMessage && (
              <p className={`mt-4 text-center text-sm font-semibold ${isSuccess ? "text-green-600" : "text-red-600"}`}>
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
