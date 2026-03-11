import React, { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar({theme, setTheme}) {
  const [isMenuOpen, isSetMenuOpen] = useState(false);

  // for light and dark mood
  // const [theme, setTheme] = useState(
  //   localStorage.getItem("theme") || "light"
  // );
   
  // useEffect(()=>{
  //     localStorage.setItem("theme", theme);
  //   document.documentElement.className = theme; 
  // },[theme]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-black backdrop-blur-md shadow-sm z-50">
        <nav  className="px-6 py-4 text-white">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              <a href="#about">DECHEN</a>
            </h1>

            <ul className="hidden md:flex gap-6 text-lg">
              <li><a href="#about" className="hover:text-blue-400 font-bold duration-200">About</a></li>
              <li><a href="#projects" className="hover:text-blue-400 font-bold duration-200">Projects</a></li>
              <li><a href="#languages" className="hover:text-blue-400 font-bold duration-200">Language</a></li>
              <li><a href="#resume" className="hover:text-blue-400 font-bold duration-200">Resume</a></li>
              <li><a href="#contact" className="hover:text-blue-400 font-bold duration-200">Contact</a></li>
            </ul>

            <button
              onClick={() => isSetMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 text-3xl"
            >
              {isMenuOpen ? <HiX /> : <HiMenu />}
            </button>
      {/* <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="px-4 py-2 rounded-md bg-gray-300 dark:bg-gray-700 dark:text-white"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button> */}
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <ul className="md:hidden flex flex-col bg-white p-3 gap-3 shadow-sm text-gray-700 mt-4">
          <li><a href="#about" className="hover:text-blue-400 font-bold duration-200">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400 font-bold duration-200">Projects</a></li>
          <li><a href="#languages" className="hover:text-blue-400 font-bold duration-200">Language</a></li>
          <li><a href="#resume" className="hover:text-blue-400 font-bold duration-200">Resume</a></li>
          <li><a href="#contact" className="hover:text-blue-400 font-bold duration-200">Contact</a></li>
        </ul>
      )}
    </>
  );
}
