import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './My-Portfolio/Navbar'
import About from './My-Portfolio/About'
import Languages from './My-Portfolio/Languages'
import Contact from './My-Portfolio/Contact'
import Resume from './My-Portfolio/Resume'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
    const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
    {/* <Navbar/>
    <About/>
    <Languages/>
    <Resume/>
    <Contact/> */}
    {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<About/>}></Route>
      <Route path='/languages' element={<Languages/>}></Route>
      <Route path='/resume' element={<Resume/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>

    </Routes>

    </BrowserRouter> */}
    <div className="bg-white text-black dark:bg-black dark:text-white transition-all duration-300">
      <Navbar theme={theme} setTheme={setTheme} />

    </div>
    <About/>



  
    </>
  )
}

export default App
