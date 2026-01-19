import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="page">
        <section className="section">
          <h1>Project Not Found</h1>
          <p>That project isn't in the current portfolio list.</p>
          <Link to="/portfolio" className="button-link">
            Back to Portfolio
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="page">
      <section className="section section--narrow">
        <div className="detail-header">
          <img src={project.image} alt={project.title} />
          <div>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            <span className="badge">{project.category}</span>
          </div>
        </div>
      </section>

      <section className="section section--narrow">
        <h2>Project Overview</h2>
        <p>
          This page will soon include deeper documentation, technical write-ups,
          and outcomes for the {project.title} project.
        </p>
        <Link to="/portfolio" className="button-link">
          Back to Portfolio
        </Link>
      </section>
    </div>
  );
};

export default ProjectDetail;
