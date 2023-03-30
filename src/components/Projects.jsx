import project1 from "../assets/project-1.png"
import project2 from "../assets/project-2.png"
import project3 from "../assets/project-3.png"

const Projects = () => {
    return (
      <div className="container">
        <h2 className="title">My Projects</h2>
        <div className="projects-container">
          <div className="project">
            <a href="https://buniagj.github.io/My-Hobby/">
              <img src={project1} alt="Project 1" />
              <div className="overlay">
              <h3>My Hobby</h3>
              <a href="https://buniagj.github.io/My-Hobby/" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </a>
          </div>
          <div className="project">
            <a href="https://buniagj.github.io/BuniagPortfolio-HC/">
              <img src={project2} alt="Project 2" />
              <div className="overlay">
              <h3>My Portfolio</h3>
              <a href="https://buniagj.github.io/BuniagPortfolio-HC/" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </a>
          </div>
          <div className="project">
           <a href="https://buniagj.github.io/mp1/">
              <img src={project3} alt="Project 3" />
              <div className="overlay">
              <h3>Touch of Julia</h3>
              <a href="https://buniagj.github.io/mp1/" target="_blank" rel="noopener noreferrer" >View Project</a>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;