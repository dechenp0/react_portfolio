import React, { useEffect, useState } from "react";
import Languages from "./Languages";
import Resume from "./Resume";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./Projects";
import { motion } from "framer-motion";
import MotionFadeUp from "./MotionFadeUp";

export default function About() {
  const roles = ["Web Developer", "Frontend Developer", "Backend Developer"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <section
        id="about"
        className="w-full min-h-screen bg-black

        flex flex-col md:flex-row items-center justify-center gap-10 px-10 py-16 mt-8"
      >
        <div className="max-w-xl">
          <MotionFadeUp>
            <h1 className="text-4xl font-bold text-white">Hello!</h1>
          </MotionFadeUp>

          <MotionFadeUp delay={0.2}>
            <h2 className="text-3xl font-semibold mt-2 text-white">
              I am <span className="text-blue-600 text-white">Pema Dechen Lama</span>
            </h2>
          </MotionFadeUp>

          <MotionFadeUp delay={0.3}>
            <h2 className="text-3xl font-bold mt-2 text-white">
              a{" "}
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-blue-500"
              >
                {`{ ${roles[currentRole]} }`}
              </motion.span>
            </h2>
          </MotionFadeUp>

          <MotionFadeUp delay={0.4}>
            <p className="text-white mt-6 leading-7">
              I am a <span className="bg-red-200 px-1 rounded text-blue-800 font-bold">Developer</span>  
              currently studying in 
              <span className="bg-yellow-200 px-1 rounded text-blue-800 font-bold"> BCA 4th Semester </span> 
              at 
              <span className="bg-green-200 px-1 rounded text-blue-800 font-bold"> Aadim National College </span>  
              under  
              <span className="bg-blue-200 px-1 rounded text-blue-800 font-bold"> Tribhuvan University</span>.
            </p>
          </MotionFadeUp>

          <MotionFadeUp delay={0.5}>
            <p className="text-white mt-4 leading-7">
              I am passionate about learning modern web technologies and doing my best to master 
              <span className="bg-green-300 px-1 rounded text-blue-800 font-bold"> HTML</span>, 
              <span className="bg-blue-300 px-1 rounded text-blue-800 font-bold"> CSS</span>, 
              <span className="bg-yellow-300 px-1 rounded text-blue-800 font-bold"> JavaScript</span>, 
              <span className="bg-purple-300 px-1 rounded text-blue-800 font-bold"> React</span>,  
              <span className="bg-red-300 px-1 rounded text-blue-800 font-bold"> Java</span>, 
              and many other programming languages.
            </p>
          </MotionFadeUp>

          <MotionFadeUp delay={0.6}>
            <p className="text-white mt-4 leading-7">
              My goal is to become a skilled IT professional and continue improving myself every day
              by learning, building projects, and exploring new technologies.
            </p>
          </MotionFadeUp>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/pema-lama-387206352/"
              target="_blank"
              className="px-6 py-2 text-blue-800 font-bold  border rounded-lg bg-gray-200 hover:bg-gray-300 transition"
              whileHover={{ scale: 1.05 }}
            >
              View LinkedIn
            </motion.a>

            <motion.a
              href="https://github.com/Dechen20/"
              target="_blank"
              className="px-6 py-2 border text-blue-800 font-bold rounded-lg bg-gray-200 hover:bg-gray-300 transition"
              whileHover={{ scale: 1.05 }}
            >
              View Github
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="shadow-xl rounded-3xl"
        >
          <img
            src="./Images/ddd.jpg"
            alt="profile"
            className="w-72 h-72 object-cover rounded-3xl shadow-xl"
          />
        </motion.div>
      </section>

      <Projects />
      <Languages />
      <Resume />
      <Contact />
    </>
  );
}
