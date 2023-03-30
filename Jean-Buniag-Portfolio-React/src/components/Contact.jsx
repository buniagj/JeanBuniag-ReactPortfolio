const Contact = () => {
    return (
      <section className="contact">
        <h1>Contact Me</h1>
        <div className="container">
          <aside>
          <h3>Should you ever think of any idea,</h3>
          <h3>Projects, suggestions, or any agenda;</h3>
          <h3>Write me a message using this form,</h3>
          <h3>or ping me using any of the social media platform.</h3>
          </aside>
          <form>
            <input type="text" placeholder="Name" />
            <textarea cols="30" rows="10" placeholder="Message"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </section>
    )
  }
  
  export default Contact