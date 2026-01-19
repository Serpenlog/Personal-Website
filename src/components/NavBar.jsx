import { Link, NavLink, useLocation } from "react-router-dom";
import { projects } from "../data/projects";

const routeTitles = {
  "/": "Home",
  "/about": "About",
  "/portfolio": "Portfolio",
};

const getTitleForPath = (pathname) => {
  if (routeTitles[pathname]) {
    return routeTitles[pathname];
  }

  if (pathname.startsWith("/portfolio/")) {
    const slug = pathname.replace("/portfolio/", "");
    const project = projects.find((item) => item.slug === slug);
    return project ? project.title : "Project";
  }

  return "Serpenlog";
};

const NavBar = ({ theme, onToggleTheme }) => {
  const location = useLocation();
  const title = getTitleForPath(location.pathname);

  return (
    <header className="navbar">
      <div className="navbar__content">
        <div className="navbar__title">
          <Link to="/">{title}</Link>
        </div>
        <nav className="navbar__links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </nav>
        <button className="theme-toggle" type="button" onClick={onToggleTheme}>
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default NavBar;
