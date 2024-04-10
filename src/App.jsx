import { NavBar } from "./componets/NavBar/NavBar.jsx"
import { Hero } from "./componets/Hero/Hero.jsx"
import { Skills } from "./componets/Skills/Skills.jsx"
import { Education } from "./componets/Education/Education.jsx"
import { Projects } from "./componets/Projects/Projects.jsx"
import { Footer } from "./componets/Footer/Footer.jsx"
import { Contact } from "./componets/Contact/Contact.jsx"

import "./App.css"


function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Skills/>
      <Education/>
      <Projects/>
      <Contact/> 
      <Footer/>
    </>
  )
}

export default App
