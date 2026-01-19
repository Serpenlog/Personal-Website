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
          <li><strong>Core Languages:</strong> Python, TypeScript, Java, C++, C#, SQL, Rust, Prolog</li>
          <li><strong>Web & Application Development:</strong> JavaScript, React, Node.js, REST APIs, .NET MAUI</li>
          <li><strong>Software Engineering:</strong> SDLC, OOP/OOD, debugging, testing, code reviews, performance profiling/optimization</li>
          <li><strong>Systems & Platforms:</strong> Linux/Unix, Windows, embedded & low-level concepts</li>
          <li><strong>Data & Formats:</strong> databases, data modeling, JSON/XML, structured schemas</li>
          <li><strong>AI / LLM Engineering:</strong> OpenAI API, Llama, prompt engineering, structured outputs, AI agents, autonomous workflows</li>
          <li><strong>RAG, NLP & Retrieval:</strong> RAG pipelines, vector search, embeddings, Hugging Face, spaCy, SentenceTransformers</li>
          <li><strong>ML Frameworks & Tooling:</strong> PyTorch, TensorFlow, Keras, Jupyter</li>
          <li><strong>Data Engineering & Evaluation:</strong> data extraction/preprocessing, dataset design & annotation workflows, evaluation pipelines (Precision/Recall/F1)</li>
          <li><strong>Compute & Infrastructure:</strong> GPU computing, cluster workloads (Slurm), distributed training pipelines, API-hosted inference</li>
          <li><strong>Hardware & Prototyping:</strong> CAD modeling, 3D printing, rapid prototyping, simulation-led generative design workflows</li>
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
          <div>
            <h3>Spoken Languages</h3>
            <p>I speak both English and Spanish fluently.</p>
          </div>
        </div>
      </section>
    </div>
);

export default About;
