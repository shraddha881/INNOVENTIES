import ProjectCard from "./ProjectCard";

function Projects() {

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform designed to provide a simple and secure online shopping experience.",
      technologies: ["React", "Node.js", "AWS"],
    },

    {
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud infrastructure designed for modern applications and business workloads.",
      technologies: ["AWS", "Terraform", "Docker"],
    },

    {
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      title: "Business Website",
      description:
        "A professional and responsive website designed to establish a strong online presence.",
      technologies: ["React", "JavaScript", "CSS"],
    },

    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      title: "Monitoring Platform",
      description:
        "A monitoring solution for tracking application and infrastructure performance.",
      technologies: ["Docker", "Prometheus", "Grafana"],
    },
  ];

  return (
    <section className="projects">

      <h2>Our Projects</h2>

      <p className="projects-subtitle">
        Some of the solutions we have built.
      </p>

      <div className="projects-container">

        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}

      </div>

    </section>
  );
}

export default Projects;