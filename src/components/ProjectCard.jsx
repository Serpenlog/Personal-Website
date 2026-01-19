import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => (
  <Link to={`/portfolio/${project.slug}`} className="project-card">
    <img src={project.image} alt={project.title} />
    <div className="project-card__content">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  </Link>
);

export default ProjectCard;
