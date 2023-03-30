import Home from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/About",
    element: <About />
  },
  {
    path: "/Projects",
    element: <Projects />
  },
  {
    path: "/Contact",
    element: <Contact />
  }
]

export default routes