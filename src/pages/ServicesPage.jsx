import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* ================================
          SERVICES HERO
      ================================= */}

      <section className="services-hero">

        <div className="services-hero-content">

          <p className="section-label">
            OUR SERVICES
          </p>

          <h1>
            Technology Solutions
            <br />
            For Your Business
          </h1>

          <p>
            We help businesses transform their ideas into
            modern, reliable and scalable digital solutions.
          </p>

        </div>

      </section>


      {/* ================================
          SERVICES SECTION
      ================================= */}

      <section className="services-page">

        <div className="services-page-container">

          <p className="section-label">
            WHAT WE PROVIDE
          </p>

          <h2>
            Our Technology Services
          </h2>


          <div className="services-grid">


            {/* Service 1 */}

            <div className="service-page-card">

              <div className="service-icon">
                💻
              </div>

              <h3>
                Web Development
              </h3>

              <p>
                We build modern, responsive and user-friendly
                websites using modern web technologies.
              </p>

            </div>


            {/* Service 2 */}

            <div className="service-page-card">

              <div className="service-icon">
                📱
              </div>

              <h3>
                Mobile Development
              </h3>

              <p>
                We create powerful mobile applications that
                provide a smooth experience across devices.
              </p>

            </div>


            {/* Service 3 */}

            <div className="service-page-card">

              <div className="service-icon">
                ☁️
              </div>

              <h3>
                Cloud Solutions
              </h3>

              <p>
                We help businesses build scalable and reliable
                cloud infrastructure and applications.
              </p>

            </div>


            {/* Service 4 */}

            <div className="service-page-card">

              <div className="service-icon">
                ⚙️
              </div>

              <h3>
                DevOps
              </h3>

              <p>
                We automate development, testing and deployment
                using modern DevOps practices.
              </p>

            </div>


            {/* Service 5 */}

            <div className="service-page-card">

              <div className="service-icon">
                🔐
              </div>

              <h3>
                Cybersecurity
              </h3>

              <p>
                We help businesses protect their applications,
                infrastructure and data from security threats.
              </p>

            </div>


            {/* Service 6 */}

            <div className="service-page-card">

              <div className="service-icon">
                📊
              </div>

              <h3>
                Data & Analytics
              </h3>

              <p>
                We help organizations use data and analytics
                to make better business decisions.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================================
          CTA SECTION
      ================================= */}

      <section className="services-cta">

        <h2>
          Have a Project in Mind?
        </h2>

        <p>
          Let's work together to turn your idea into
          a powerful digital solution.
        </p>

        <a
          href="/contact"
          className="cta-button"
        >
          Contact Us
        </a>

      </section>


      <Footer />

    </>
  );
}

export default ServicesPage;