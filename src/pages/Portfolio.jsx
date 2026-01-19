import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Portfolio = () => {
  const computerScience = projects.filter(
    (project) => project.category === "Computer Science"
  );
  const digitalFabrication = projects.filter(
    (project) => project.category === "Digital Fabrication"
  );

  return (
    <div className="page">
      <section className="section">
        <h1>Portfolio</h1>
        <p>
          A curated look at my software systems and fabrication projects.
          Select any project to learn more.
        </p>
      </section>

      <section className="section">
        <h2>Computer Science</h2>
        <div className="card-grid">
          {computerScience.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Digital Fabrication</h2>
        <div className="card-grid">
          {digitalFabrication.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
