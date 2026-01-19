import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="page">
    <section className="section section--narrow">
      <h1>Page Not Found</h1>
      <p>The page you're looking for doesn't exist yet.</p>
      <Link to="/" className="button-link">
        Back to Home
      </Link>
    </section>
  </div>
);

export default NotFound;
