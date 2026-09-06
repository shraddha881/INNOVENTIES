function Contact() {
  return (
    <section className="contact">

      <h2>Contact Us</h2>

      <p className="contact-subtitle">
        Let's discuss your next project.
      </p>

      <div className="contact-container">

        {/* Contact Information */}

        <div className="contact-info">

          <h3>Get In Touch</h3>

          <p>
            We'd love to hear about your project.
            Get in touch with us and let's build
            something great together.
          </p>

          <div className="contact-item">
            
            <div>
              <strong>Email</strong>
              <p>contact@innoventies.com</p>
            </div>
          </div>

          <div className="contact-item">
            
            <div>
              <strong>Phone</strong>
              <p>8861662775</p>
            </div>
          </div>

          <div className="contact-item">
            
            <div>
              <strong>Location</strong>
              <p>India</p>
            </div>
          </div>

        </div>


        {/* Contact Form */}

        <form className="contact-form">

          <div className="form-group">

            <label htmlFor="name">
              Your Name
            </label>

            <input
              type="text"
              id="name"
              placeholder="Enter your name"
            />

          </div>


          <div className="form-group">

            <label htmlFor="email">
              Email
            </label>

            <input
              type="email"
              id="email"
              placeholder="Enter your email"
            />

          </div>


          <div className="form-group">

            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              rows="5"
              placeholder="Enter your message"
            ></textarea>

          </div>


          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;
          