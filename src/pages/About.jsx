const About = () => (
  <div className="page">
    <section className="section section--narrow">
      <h1>About Me</h1>
      <p>
        I am Serpenlog, a multidisciplinary builder focused on software systems
        and digital fabrication. I enjoy turning ambiguous ideas into reliable,
        human-centered products.
      </p>
    </section>

    <section className="section section--narrow">
      <h2>Technical Skills</h2>
      <ul className="skills">
        <li>JavaScript / React / Node.js</li>
        <li>Python, C++, and data tooling</li>
        <li>Systems design, distributed services, and APIs</li>
        <li>CAD modeling, 3D printing, and rapid prototyping</li>
        <li>Simulation-led generative design workflows</li>
      </ul>
    </section>

    <section className="section section--narrow">
      <h2>Quick Facts</h2>
      <div className="facts">
        <div>
          <h3>Focus</h3>
          <p>Bridging digital products with physical fabrication.</p>
        </div>
        <div>
          <h3>Current Interests</h3>
          <p>Microfluidics, low-cost medical devices, and robust tooling.</p>
        </div>
        <div>
          <h3>Collaboration</h3>
          <p>Open to research collaborations and ambitious product builds.</p>
        </div>
      </div>
    </section>
  </div>
);

export default About;
