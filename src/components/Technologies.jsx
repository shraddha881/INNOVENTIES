function Technologies() {
  const technologies = [
    {
      icon: "⚛️",
      name: "React",
      description: "Modern frontend development",
      platform: "Web",
    },
    {
      icon: "🟨",
      name: "JavaScript",
      description: "Dynamic web applications",
      platform: "mobile",
    },
    {
      icon: "🟢",
      name: "Node.js",
      description: "Backend development",
      platform: "Tablet",
    },
    
  ];

  return (
    <section className="technologies">

      <h2>Technologies We Use</h2>

      <p className="technologies-subtitle">
        We work with modern technologies to build
        reliable digital solutions.
      </p>

      <div className="technologies-container">

        {technologies.map((technology) => (
          <div className="technology-card" key={technology.name}>

            <div className="technology-icon">
              {technology.icon}
            </div>

            <h3>{technology.name}</h3>

            <p>{technology.description}</p>
            <p className="technology-platform">{technology.platform}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Technologies;