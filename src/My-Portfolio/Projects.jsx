import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projectData = [
    {
      title: "Portfolio Website",
      desc: "A responsive portfolio website built with HTML, CSS to showcase projects and skills.",
      img: "./Images/project1.avif",
      tech: ["HTML", "CSS", "Responsive Design"],
    },
    {
      title: "Food Donor App",
      desc: "A platform connecting food donors with collection centers.",
      img: "./Images/project2.avif",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "E-commerce Website Full Responsive",
      desc: "A fully responsive e-commerce platform.",
      img: "./Images/project-3.avif",
      tech: ["React", "Firebase", "Stripe API"],
    },
    {
      title: "Personal Portfolio Website Using React Vite And Tailwind",
      desc: "A responsive portfolio website built with React Vite & Tailwind CSS.",
      img: "./Images/ddd.jpg",
      tech: ["React Vite", "Tailwind CSS", "Responsive Design"],
    },
  ];

  return (
    <>
      <section id="projects" className="py-16 bg-black">
        <div className="container mx-auto px-4">

          <motion.h2
            className="text-4xl font-bold text-white text-center mb-6 mt-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                className="group bg-black rounded-xl overflow-hidden shadow-lg cursor-pointer"
                
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                
                whileHover={{ scale: 1.03 }}
              >
                <div className="h-[200px] overflow-hidden hover:bg-blue-400">
                  <motion.img
                    src={project.img}
                    alt="project"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                <div className="p-6 hover:bg-blue-600">
                  <h3 className="text-xl font-semibold line-clamp-1 ">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-white line-clamp-2">
                    {project.desc}
                  </p>

                  <div className="flex gap-2 mt-4 flex-wrap ">
                    {project.tech.map((t, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                        whileHover={{ scale: 1.1 }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
