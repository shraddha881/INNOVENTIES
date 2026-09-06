function ProjectCard({ image, title, description, technologies }) {
  return (
    <div className="project-card">

      <img
        src={image}
        alt={title}
        className="project-image"
      />

      <div className="project-content">

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="project-technologies">
          {technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <button className="project-button">
          View Project →
        </button>

      </div>

    </div>
  );
}

export default ProjectCard;