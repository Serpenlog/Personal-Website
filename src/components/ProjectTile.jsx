import { Link } from "react-router-dom";

const ProjectTile = ({ project }) => (
  <Link to={`/portfolio/${project.slug}`} className="project-tile">
    <img src={project.image} alt={project.title} />
  </Link>
);

export default ProjectTile;
