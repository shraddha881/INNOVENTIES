import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <>
      <Navbar />

     

      <section className="about-hero">

        <div className="about-hero-content">

          <p>ABOUT INNOVENTIES</p>

          <h1>
            We Build Digital Solutions
            <br />
            That Drive Business Growth
          </h1>

          <p className="about-hero-description">
            Innoventies helps businesses transform their ideas into
            modern, reliable and scalable digital solutions.
          </p>

        </div>

      </section>


      

      <section className="who-we-are">

        <div className="who-container">

          <div className="who-content">

            <p className="section-label">
              WHO WE ARE
            </p>

            <h2>
              Technology Partner for Modern Businesses
            </h2>

            <p>
              Innoventies is a technology-focused company that
              provides modern digital solutions for businesses
              of different sizes.
            </p>

            <p>
              We combine software development, cloud technologies
              and modern engineering practices to create solutions
              that are reliable, scalable and easy to maintain.
            </p>

          </div>


          <div className="who-image">

            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Innoventies team working together"
            />

          </div>

        </div>

      </section>


    

      <section className="mission-section">

        <div className="mission-container">

          <div className="mission-card">

           

            <h2>Our Mission</h2>

            <p>
              Our mission is to help businesses use technology
              effectively by building reliable, scalable and
              user-friendly digital solutions.
            </p>

          </div>


          <div className="mission-card">

            

            <h2>Our Vision</h2>

            <p>
              Our vision is to become a trusted technology partner
              for organizations looking to build innovative and
              future-ready digital products.
            </p>

          </div>

        </div>

      </section>


      

      <section className="values-section">

        <div className="values-container">

          <p className="section-label">
            OUR VALUES
          </p>

          <h2>
            What We Believe In
          </h2>

          <div className="values-grid">

            <div className="value-card">

              <h3>Innovation</h3>

              <p>
                We continuously explore better technologies and
                smarter ways to solve business problems.
              </p>

            </div>


            <div className="value-card">

              <h3>Quality</h3>

              <p>
                We focus on creating reliable, maintainable and
                high-quality software solutions.
              </p>

            </div>


            <div className="value-card">

              <h3>Transparency</h3>

              <p>
                We believe in clear communication and honest
                collaboration with our clients.
              </p>

            </div>


            <div className="value-card">

              <h3>Customer First</h3>

              <p>
                We understand business requirements and build
                solutions around our customers' needs.
              </p>

            </div>

          </div>

        </div>

      </section>


      

      <section className="why-about">

        <div className="why-about-container">

          <p className="section-label">
            WHY INNOVENTIES
          </p>

          <h2>
            Why Choose Us?
          </h2>

          <div className="why-grid">

            <div>
              <h3>Modern Technology</h3>

              <p>
                We use modern technologies and development
                practices to build future-ready solutions.
              </p>
            </div>


            <div>
              <h3>Scalable Solutions</h3>

              <p>
                Our solutions are designed to grow along with
                your business.
              </p>
            </div>


            <div>
              <h3>Reliable Support</h3>

              <p>
                We focus on building long-term relationships
                through reliable support and communication.
              </p>
            </div>

          </div>

        </div>

      </section>


     

      <section className="about-cta">

        <h2>
          Let's Build Something Great Together
        </h2>

        <p>
          Have an idea or a business challenge?
          Let's discuss how technology can help.
        </p>

        <a href="/contact" className="cta-button">
          Contact Us
        </a>

      </section>


      <Footer />

    </>
  );
}

export default AboutPage;