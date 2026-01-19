import { projects, homeHighlights } from "../data/projects";
import ProjectTile from "../components/ProjectTile";

const Home = () => {
  const highlightProjects = homeHighlights
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean);

  return (
    <div className="page">
      <section
        className="hero"
        style={{ backgroundImage: "url(/assets/background.jpg)" }}
      >
        <div className="hero__overlay">
          <h1>Serpenlog</h1>
          <p>
            Building thoughtful software and digital fabrication projects that
            blend engineering precision with creative problem solving.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <h2>Featured Work</h2>
          <p>Quick access to some of my latest project highlights.</p>
        </div>
        <div className="tile-grid">
          {highlightProjects.map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
