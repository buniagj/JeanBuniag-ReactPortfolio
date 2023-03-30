import profile from "../assets/PROFILE2.png"
const About = () => {
  return (
    <section className="about">
      <h1>About Me</h1>
      <div className="container">
        <img srcSet={profile} alt="" />
        <div className="about-text">
          <h3>Teacher Turned Web Developer</h3>
          <p>I spent seven years in the classroom, helping students learn and grow, before deciding to pursue my passion for web development.</p>
          <p>I've always been interested in technology and the way it can be used to solve problems and make our lives easier. As a teacher, I found myself using technology more and more to engage my students and help them learn in new ways. That experience sparked a desire to learn more about web development and how I could use those skills to make a difference in the world.</p>
          <p>Now, I'm on a mission to create beautiful and functional websites that make people's lives easier and more enjoyable. I'm excited to be part of an industry that is constantly evolving and pushing the boundaries of what's possible.</p>
        </div>
      </div>
    </section>
  )
}

export default About