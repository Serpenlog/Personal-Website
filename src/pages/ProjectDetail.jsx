import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

const renderParagraphs = (paragraphs) =>
  paragraphs?.map((text) => <p key={text.slice(0, 24)}>{text}</p>);

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

  const { details } = project;

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

      {details ? (
        <section className="section section--narrow detail-body">
          <div className="detail-section">
            <h2>Overview</h2>
            <p>{details.overview}</p>
          </div>

          {details.highlights?.length ? (
            <div className="detail-section">
              <h3>Highlights</h3>
              <ul className="detail-highlights">
                {details.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {details.links?.length ? (
            <div className="detail-section">
              <h3>Resources</h3>
              <div className="detail-links">
                {details.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="button-link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ) : null}

          {details.sections?.map((section) => (
            <div className="detail-section" key={section.title}>
              <h3>{section.title}</h3>
              {renderParagraphs(section.paragraphs)}
              {section.links?.length ? (
                <ul className="detail-links-list">
                  {section.links.map((link) => (
                    <li key={link.url}>
                      <a href={link.url} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.bullets?.length ? (
                <ul className="detail-bullets">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}

          {details.steps ? (
            <div className="detail-section">
              <h3>{details.steps.title}</h3>
              <ol className="detail-steps">
                {details.steps.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          ) : null}

          {details.dataLists?.map((list) => (
            <div className="detail-section" key={list.title}>
              <h3>{list.title}</h3>
              <dl className="data-list">
                {list.items.map((item) => (
                  <div key={`${item.label}-${item.value}`}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}

          {details.tables?.map((table) => (
            <div className="detail-section" key={table.title}>
              <h3>{table.title}</h3>
              <div className="detail-table-wrapper">
                <table className="detail-table">
                  <thead>
                    <tr>
                      {table.headers.map((header) => (
                        <th key={header}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row, rowIndex) => (
                      <tr key={`${table.title}-${rowIndex}`}>
                        {row.map((cell, cellIndex) => (
                          <td key={`${table.title}-${rowIndex}-${cellIndex}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {details.gallery ? (
            <div className="detail-section">
              <h3>{details.gallery.title}</h3>
              <div className="media-grid">
                {details.gallery.items.map((item) => (
                  <figure key={item.src}>
                    <img src={item.src} alt={item.alt} />
                    <figcaption>{item.alt}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ) : null}

          {details.gifEmbeds?.length ? (
            <div className="detail-section">
              <h3>Motion demos</h3>
              <div className="embed-grid">
                {details.gifEmbeds.map((embed) => (
                  <div className="embed-card" key={embed.url}>
                    <iframe
                      className="embed-frame embed-frame--tall"
                      src={embed.url}
                      title={embed.title}
                      allowFullScreen
                    />
                    <p>{embed.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {details.embeds?.length ? (
            <div className="detail-section">
              <h3>CAD model demos</h3>
              <div className="embed-grid">
                {details.embeds.map((embed) => (
                  <div className="embed-card" key={embed.url}>
                    <iframe
                      className="embed-frame"
                      src={embed.url}
                      title={embed.title}
                      allowFullScreen
                    />
                    <p>{embed.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <Link to="/portfolio" className="button-link">
            Back to Portfolio
          </Link>
        </section>
      ) : (
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
      )}
    </div>
  );
};

export default ProjectDetail;
