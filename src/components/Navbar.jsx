import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <span className="logo">
        <img src={logo} alt="" />
        </span>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about" end>About Me</NavLink>
          <NavLink to="/projects" end>Projects</NavLink>
          <NavLink to="/contact" end>Contact</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Navbar