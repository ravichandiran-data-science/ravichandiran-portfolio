import React from "react";
import "./styles.css";

export default function App() {
  const projects = [
    {
      title: "Lease Document Information Extraction",
      desc: "Developed an AI-powered system using LLMs, LangChain, and PyMuPDF to extract structured data from lease documents with 90% accuracy.",
      tech: "Python, LLMs, LangChain, OpenAI, PyMuPDF, RAG",
    },
    {
      title: "Dynamic Pricing Engine",
      desc: "Built an ML-driven hotel room pricing model on Google Cloud (Vertex AI, BigQuery) to automate and optimize pricing strategies.",
      tech: "Python, Vertex AI, GCP, BigQuery, Machine Learning",
    },
    {
      title: "NLP Web Scraping & PDF Extraction",
      desc: "Implemented NLP and scraping tools for sentiment analysis and entity extraction from online documents.",
      tech: "Python, BeautifulSoup, OCR, NLP",
    },
  ];

  return (
    <div className="page">
      <header className="hero">
        <h1 className="name">Ravichandiran A</h1>
        <p className="tagline">AI Engineer • Machine Learning • NLP</p>
        <div className="links">
          <a href="mailto:ravichandiranav13@gmail.com" className="btn">
            Contact Me
          </a>
          <a
            href="https://github.com/ravichandiran-data-science"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ravichandiran-a-2951762b5/"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            LinkedIn
          </a>
        </div>
      </header>

      <section className="card">
        <h2>About Me</h2>
        <p>
          I’m a passionate Machine Learning Engineer with a Master’s in Data
          Science and AI from SASTRA University. I specialize in developing
          AI-driven automation solutions, NLP systems, and scalable ML models
          deployed on cloud platforms.
        </p>
      </section>

      <section className="card">
        <h2>Skills</h2>
        <div className="skills">
          {[
            "Python",
            "SQL",
            "TensorFlow",
            "PyTorch",
            "LangChain",
            "OpenAI",
            "RAG",
            "Vertex AI",
            "BigQuery",
            "GCP",
            "Power BI",
            "NLP",
            "Machine Learning",
            "Data Analysis",
          ].map((skill) => (
            <span key={skill} className="skill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Projects</h2>
        <div className="projects">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <h3>{p.title}</h3>
              <p className="desc">{p.desc}</p>
              <p className="tech">{p.tech}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Experience</h2>
        <div className="exp">
          <h3>Machine Learning Engineer — Zeal CRE Solution</h3>
          <p>Jul 2025 – Present</p>
          <p>
            Working on LLM-based automation and document intelligence systems;
            developing AI agents and RAG-powered document extractors.
          </p>
        </div>
        <div className="exp">
          <h3>Data Science Intern — Beau Roi Technologies</h3>
          <p>Jan 2025 – Apr 2025</p>
          <p>
            Built and deployed a dynamic pricing engine using GCP (Vertex AI,
            BigQuery), automating hotel room pricing adjustments.
          </p>
        </div>
      </section>

      <section className="card">
        <h2>Education</h2>
        <p>M.Sc Data Science & AI — SASTRA University (2023–2025)</p>
        <p>B.Sc Physics — Presidency College (2020–2023)</p>
      </section>

      <footer>
        <p>© 2025 Ravichandiran A | Built with ❤️ using React</p>
      </footer>
    </div>
  );
}
