import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProjectsPage() {
  return (
    <>
      <Navbar />

      {/* ================================
          PROJECTS HERO
      ================================= */}

      <section className="projects-hero">
        <div className="projects-hero-content">

          <p className="section-label">
            OUR PROJECTS
          </p>

          <h1>
            Solutions We've
            <br />
            Built
          </h1>

          <p className="projects-hero-description">
            Explore some of the digital solutions and
            technology projects we have worked on.
          </p>

        </div>
      </section>


      {/* ================================
          PROJECTS SECTION
      ================================= */}

      <section className="projects-page">

        <div className="projects-page-container">

          <p className="section-label">
            OUR WORK
          </p>

          <h2>
            Featured Projects
          </h2>


          <div className="projects-page-grid">


            {/* PROJECT 1 */}

            <div className="project-page-card">

              <div className="project-page-image">

                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
                  alt="E-commerce website project"
                />

              </div>


              <div className="project-page-content">

                <span className="project-category">
                  E-Commerce
                </span>

                <h3>
                  E-Commerce Platform
                </h3>

                <p>
                  A modern e-commerce platform designed to
                  provide customers with a smooth and
                  user-friendly shopping experience.
                </p>


                <div className="project-technologies">

                  <span>React</span>
                  <span>JavaScript</span>
                  <span>CSS</span>

                </div>


                <button className="project-page-button">
                  View Project →
                </button>

              </div>

            </div>



            {/* PROJECT 2 */}

            <div className="project-page-card">

              <div className="project-page-image">

                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                  alt="Business management application"
                />

              </div>


              <div className="project-page-content">

                <span className="project-category">
                  Business
                </span>

                <h3>
                  Business Management System
                </h3>

                <p>
                  A business management solution that helps
                  organizations manage their operations
                  efficiently.
                </p>


                <div className="project-technologies">

                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>

                </div>


                <button className="project-page-button">
                  View Project →
                </button>

              </div>

            </div>



            {/* PROJECT 3 */}

            <div className="project-page-card">

              <div className="project-page-image">

                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                  alt="Analytics dashboard"
                />

              </div>


              <div className="project-page-content">

                <span className="project-category">
                  Analytics
                </span>

                <h3>
                  Analytics Dashboard
                </h3>

                <p>
                  A powerful analytics dashboard that helps
                  businesses visualize data and make
                  informed decisions.
                </p>


                <div className="project-technologies">

                  <span>React</span>
                  <span>Chart.js</span>
                  <span>API</span>

                </div>


                <button className="project-page-button">
                  View Project →
                </button>

              </div>

            </div>



            {/* PROJECT 4 */}

            <div className="project-page-card">

              <div className="project-page-image">

                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
                  alt="Cloud infrastructure project"
                />

              </div>


              <div className="project-page-content">

                <span className="project-category">
                  Cloud
                </span>

                <h3>
                  Cloud Infrastructure
                </h3>

                <p>
                  A scalable cloud infrastructure designed
                  to support modern applications and
                  growing business requirements.
                </p>


                <div className="project-technologies">

                  <span>AWS</span>
                  <span>Terraform</span>
                  <span>Docker</span>

                </div>


                <button className="project-page-button">
                  View Project →
                </button>

              </div>

            </div>



            {/* PROJECT 5 */}

            <div className="project-page-card">

              <div className="project-page-image">

                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
                  alt="DevOps automation project"
                />

              </div>


              <div className="project-page-content">

                <span className="project-category">
                  DevOps
                </span>

                <h3>
                  CI/CD Automation
                </h3>

                <p>
                  An automated CI/CD pipeline designed to
                  improve application deployment and
                  development workflows.
                </p>


                <div className="project-technologies">

                  <span>Jenkins</span>
                  <span>Docker</span>
                  <span>Kubernetes</span>

                </div>


                <button className="project-page-button">
                  View Project →
                </button>

              </div>

            </div>



            {/* PROJECT 6 */}

            <div className="project-page-card">

              <div className="project-page-image">

                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
                  alt="Cybersecurity project"
                />

              </div>


              <div className="project-page-content">

                <span className="project-category">
                  Security
                </span>

                <h3>
                  Security Monitoring System
                </h3>

                <p>
                  A security monitoring solution designed
                  to identify suspicious activity and
                  improve infrastructure visibility.
                </p>


                <div className="project-technologies">

                  <span>Linux</span>
                  <span>Monitoring</span>
                  <span>Security</span>

                </div>


                <button className="project-page-button">
                  View Project →
                </button>

              </div>

            </div>


          </div>

        </div>

      </section>



      {/* ================================
          CALL TO ACTION
      ================================= */}

      <section className="projects-cta">

        <h2>
          Have an Idea for Your Next Project?
        </h2>

        <p>
          Let's work together to turn your idea into
          a powerful digital solution.
        </p>

        <a
          href="/contact"
          className="cta-button"
        >
          Start a Project
        </a>

      </section>


      <Footer />

    </>
  );
}

export default ProjectsPage;