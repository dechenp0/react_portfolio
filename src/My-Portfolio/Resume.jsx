import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  const sections = [
    {
      title: "Career Objective",
      content: (
        <p className="text-white leading-relaxed">
          Motivated BCA student with strong foundation in web development,
          Java programming, and problem-solving. Seeking opportunities to
          apply my technical skills in real projects and grow as an IT
          professional.
        </p>
      ),
    },
    {
      title: "Skills",
      content: (
        <ul className="text-white grid md:grid-cols-2 gap-2">
          <li>HTML, CSS</li>
          <li>Java, C Programming</li>
          <li>React, Tailwind CSS</li>
          <li>Git & GitHub</li>
          <li>SQL / MySQL</li>
          <li>Communication & Teamwork</li>
        </ul>
      ),
    },
    {
      title: "Education",
      content: (
        <div className="text-white space-y-3">
          <div>
            <h4 className="font-semibold text-lg">Bachelor in Computer Application (BCA)</h4>
            <p>Aadim National College, Kathmandu</p>
            <p>2nd Year (Ongoing)</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">+2 Science</h4>
            <p>Bouddha International School</p>
            <p>GPA: 3.60</p>
          </div>
        </div>
      ),
    },
    {
      title: "Projects",
      content: (
        <div className="text-white space-y-4">
          <div>
            <h4 className="font-semibold text-lg">React Portfolio Website</h4>
            <p>
              A modern personal portfolio built using React, Vite and Tailwind CSS to showcase skills, resume, and projects.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Food Donor</h4>
            <p>
              A Food Donor Application that connects people to share leftover food. Built using HTML, CSS, and JavaScript for the frontend, and PHP with MySQL for the backend.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Experience",
      content: (
        <p className="text-white">
          <span className="font-semibold">Primary Teacher</span> — May to Aug 2023
          <br />
          Taught basic subjects to young students, improved communication and leadership skills.
        </p>
      ),
    },
    {
      title: "Languages",
      content: (
        <ul className="text-white grid md:grid-cols-2 gap-2">
          <li>English</li>
          <li>Nepali</li>
          <li>Hindi</li>
          <li>Tibetan</li>
        </ul>
      ),
    },
    {
      title: "Hobbies",
      content: (
        <ul className="text-white grid md:grid-cols-2 gap-2">
          <li>Dancing</li>
          <li>Traveling</li>
          <li>Reading</li>
          <li>Singing</li>
        </ul>
      ),
    },
  ];

  return (
    <section id="resume" className="w-full bg-black py-16 px-6 mt-0 md:px-20">
      
      <motion.h2
        className="text-4xl font-bold text-white text-center mt-6 mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Resume
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-10">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-2">{section.title}</h3>
            {section.content}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
