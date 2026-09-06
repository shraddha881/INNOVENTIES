import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });


  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };


  const handleSubmit = (event) => {

    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      message: ""
    });

  };


  return (
    <>
      <Navbar />


      {/* =========================
          CONTACT HERO
      ========================= */}

      <section className="contact-hero">

        <div className="contact-hero-content">

          <p className="section-label">
            CONTACT US
          </p>

          <h1>
            Let's Start a
            <br />
            Conversation
          </h1>

          <p className="contact-hero-description">
            Have a project, business idea or technology challenge?
            We'd love to hear from you.
          </p>

        </div>

      </section>


      {/* =========================
          CONTACT SECTION
      ========================= */}

      <section className="contact-page">

        <div className="contact-container">


          {/* Contact Information */}

          <div className="contact-info">

            <p className="section-label">
              GET IN TOUCH
            </p>

            <h2>
              We'd Love to Hear From You
            </h2>

            <p>
              Whether you have a new project, a business idea,
              or simply want to learn more about our services,
              feel free to contact us.
            </p>


            <div className="contact-detail">

              <h3>
                📧 Email
              </h3>

              <p>
                hello@innoventies.com
              </p>

            </div>


            <div className="contact-detail">

              <h3>
                📞 Phone
              </h3>

              <p>
                +91 8861662775
              </p>

            </div>


            <div className="contact-detail">

              <h3>
                📍 Location
              </h3>

              <p>
                Bengaluru, Karnataka, India
              </p>

            </div>

          </div>


          {/* Contact Form */}

          <div className="contact-form-container">

            <h2>
              Send Us a Message
            </h2>


            <form onSubmit={handleSubmit}>


              {/* Name */}

              <div className="form-group">

                <label htmlFor="name">
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* Email */}

              <div className="form-group">

                <label htmlFor="email">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* Message */}

              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* Submit Button */}

              <button
                type="submit"
                className="contact-button"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="contact-cta">

        <h2>
          Let's Build Something Great Together
        </h2>

        <p>
          Turn your idea into a modern digital solution.
        </p>

      </section>


      <Footer />

    </>
  );
}

export default ContactPage;










      