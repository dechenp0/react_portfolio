import React from 'react'
import { motion } from 'framer-motion'

export default function Languages() {

  const skills = [
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      name: "HTML / CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    }
  ];

  return (
    <>
      <section id='languages' className="w-full min-h-screen  bg-black px-10 py-16 ">
        
        <motion.h1 
          className="text-4xl font-bold text-white text-center mt-4 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Languages
        </motion.h1>

        <motion.p 
          className="text-white mt-2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Here are some of the technologies and programming languages I work with.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 bg-blue-600 p-5 rounded-xl shadow cursor-pointer"
              
              initial={{ opacity: 0, rotate: -10, y: 30 }}
              whileInView={{ opacity: 1, rotate: 0, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}

              whileHover={{ scale: 1.05, rotate: 6 }}
            >
              <img src={skill.icon} alt={skill.name} className="w-10" />
              <p className="text-lg font-semibold text-gray-900">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
