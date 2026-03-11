import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.name.trim()) validationErrors.name = "Name is required";
    if (!formData.email.trim()) validationErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = "Email is invalid";
    if (!formData.message.trim()) validationErrors.message = "Message is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent successfully!");
  };

  return (
    <section
      id="contact"
      className="w-full bg-black px-10 py-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>

          <motion.form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className={`border rounded-lg px-4 py-3 bg-transparent text-white focus:outline-none ${errors.name ? "border-red-500" : "border-gray-400"}`}
              whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <motion.input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={`border rounded-lg px-4 py-3 bg-transparent text-white focus:outline-none ${errors.email ? "border-red-500" : "border-white"}`}
              whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <motion.textarea
              name="message"
              rows="6"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className={`border rounded-lg px-4 py-3 bg-transparent text-white focus:outline-none ${errors.message ? "border-red-500" : "border-white"}`}
              whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
            ></motion.textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            <motion.button
              type="submit"
              className="w-32 py-2 border border-white rounded-lg text-white hover:bg-black transition"
              whileHover={{ scale: 1.05 }}
            >
              Submit
            </motion.button>
          </motion.form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Contact Information</h2>

          <motion.div className="flex items-center gap-4 mb-6" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <MdEmail className="text-blue-600 text-2xl" />
            <p className="text-white text-lg">dechenlama123@gmail.com</p>
          </motion.div>

          <motion.div className="flex items-center gap-4 mb-6" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <FaPhoneAlt className="text-green-600 text-2xl" />
            <p className="text-white text-lg">+977 9749424049</p>
          </motion.div>

          <motion.div className="flex items-center gap-4 mb-6" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
            <IoLocationSharp className="text-red-600 text-2xl" />
            <p className="text-white text-lg">Kathmandu, Nepal</p>
          </motion.div>

          <motion.div className="flex items-center gap-6 mt-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}>
            <a href="https://www.facebook.com/dechen.pema.pd" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-blue-600 text-3xl hover:scale-110 transition" />
            </a>
            <a href="https://www.instagram.com/pema_dechen_lama/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 text-3xl hover:scale-110 transition" />
            </a>
            <a href="https://www.linkedin.com/in/pema-lama-387206352/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-blue-700 text-3xl hover:scale-110 transition" />
            </a>
            <a href="https://github.com/Dechen20/" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-800 text-3xl hover:scale-110 transition" />
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
