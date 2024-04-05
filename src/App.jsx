import { NavBar } from "./componets/NavBar/NavBar.jsx"
import { Hero } from "./componets/Hero/Hero.jsx"
import { About } from "./componets/About/About.jsx"
import { Education } from "./componets/Education/Education.jsx"
import { Skills } from "./componets/Skills/Skills.jsx"
import { Projects } from "./componets/Projects/Projects.jsx"
import "./App.css"


function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
    </>
  )
}

export default App
