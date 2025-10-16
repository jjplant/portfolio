import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaExternalLinkAlt,
  FaCode,
  FaServer,
  FaCloud,
  FaRocket,
} from "react-icons/fa";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "tech", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const openLightbox = (image) => {
    setLightboxImage(image);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setIsLightboxOpen(false);
  };

  const projectImages = {
    PanelScript: [
      "screenshots/pse-1_result.png",
      "screenshots/pse-2_result.png",
      "screenshots/pse-3_result.png",
      "screenshots/pse-7_result.png",
    ],
    MiraLux: [
      "screenshots/ml1.jpeg",
      "screenshots/ml2.jpeg",
      "screenshots/ml3.jpeg",
      "screenshots/ml5.jpeg",
    ],
  };

  return (
    <div className="App">
      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt="Enlarged project screenshot"
              className="lightbox-image"
            />
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">Jay Javier</div>
          <div className="nav-links">
            {["home", "projects", "tech", "contact"].map((section) => (
              <button
                key={section}
                className={`nav-link ${
                  activeSection === section ? "active" : ""
                }`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <h1 className="hero-title">
            Creative Technologist &{" "}
            <span className="highlight">Senior Engineer</span>
          </h1>
          <p className="hero-subtitle">
            12 years building resilient systems that scale. Currently crafting
            production infrastructure with 99%+ uptime while exploring the
            intersection of creativity and technology.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Production Sites</div>
            </div>
            <div className="stat">
              <div className="stat-number">99%+</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat">
              <div className="stat-number">150%</div>
              <div className="stat-label">Efficiency Gains</div>
            </div>
          </div>
          <div className="hero-buttons">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              View Projects
            </a>
            <a
              href="https://linkedin.com/in/jayjavieryyc"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Systems showcasing full-stack development and DevOps practices
          </p>

          <div className="project-grid">
            {/* PanelScript Card */}
            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">PanelScript</h3>
                <div className="project-badge">Interactive Framework</div>
              </div>

              <p className="project-description">
                Production-grade dialogue system with JWT-secured backend,
                modular architecture (6 managers, 8 renderers). Features CI/CD
                automation and performance optimizations that reduced load times
                by 70%.
              </p>

              {/* Image Gallery */}
              <div className="project-gallery">
                {projectImages.PanelScript.map((image, index) => (
                  <div
                    key={index}
                    className="gallery-tile"
                    onClick={() => openLightbox(image)}
                  >
                    <img
                      src={image}
                      alt={`PanelScript screenshot ${index + 1}`}
                    />
                  </div>
                ))}
              </div>

              <div className="project-metrics">
                <div className="metric">
                  <FaCode className="metric-icon" />
                  <span>820+ lines refactored</span>
                </div>
                <div className="metric">
                  <FaServer className="metric-icon" />
                  <span>Zero session failures</span>
                </div>
                <div className="metric">
                  <FaRocket className="metric-icon" />
                  <span>70% faster loads</span>
                </div>
              </div>

              <div className="project-tech">
                <span className="tech-tag">React 18</span>
                <span className="tech-tag">Phaser 3</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">JWT Auth</span>
                <span className="tech-tag">Cloudflare</span>
                <span className="tech-tag">Render</span>
              </div>

              <div className="project-links">
                <a
                  href="https://panelscript.jjplant.place"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href="https://panelscript-api.jjplant.place/about"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> API
                </a>
              </div>
            </div>

            {/* MiraLux Card */}
            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">MiraLux</h3>
                <div className="project-badge">AI Platform</div>
              </div>

              <p className="project-description">
                Multi-provider AI orchestration with 4 APIs, circuit breakers,
                and intelligent failover achieving 99%+ uptime. Serverless
                architecture on Vercel scales globally.
              </p>

              {/* Image Gallery */}
              <div className="project-gallery">
                {projectImages.MiraLux.map((image, index) => (
                  <div
                    key={index}
                    className="gallery-tile"
                    onClick={() => openLightbox(image)}
                  >
                    <img src={image} alt={`MiraLux screenshot ${index + 1}`} />
                  </div>
                ))}
              </div>

              <div className="project-metrics">
                <div className="metric">
                  <FaCloud className="metric-icon" />
                  <span>4 AI providers</span>
                </div>
                <div className="metric">
                  <FaServer className="metric-icon" />
                  <span>Auto-failover</span>
                </div>
                <div className="metric">
                  <FaRocket className="metric-icon" />
                  <span>&lt;500ms response</span>
                </div>
              </div>

              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Vercel</span>
                <span className="tech-tag">OpenAI</span>
                <span className="tech-tag">Gemini</span>
                <span className="tech-tag">Cohere</span>
                <span className="tech-tag">Anthropic</span>
                <span className="tech-tag">Circuit Breakers</span>
              </div>

              <div className="project-links">
                <a
                  href="https://miralux.jjplant.place"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href="https://miralux-backend.jjplant.place"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> API
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="tech-stack">
        <div className="container">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            12 years of production experience across the stack
          </p>

          <div className="tech-grid">
            <div className="tech-category">
              <h3 className="tech-category-title">Frontend</h3>
              <div className="tech-list">
                <span className="tech-item">React</span>
                <span className="tech-item">TypeScript</span>
                <span className="tech-item">Next.js</span>
                <span className="tech-item">Tailwind CSS</span>
                <span className="tech-item">Phaser 3</span>
              </div>
            </div>

            <div className="tech-category">
              <h3 className="tech-category-title">Backend</h3>
              <div className="tech-list">
                <span className="tech-item">Node.js</span>
                <span className="tech-item">Python</span>
                <span className="tech-item">Express</span>
                <span className="tech-item">PostgreSQL</span>
                <span className="tech-item">Oracle</span>
                <span className="tech-item">Java</span>
                <span className="tech-item">C/C++</span>
                <span className="tech-item">JWT Auth</span>
              </div>
            </div>

            <div className="tech-category">
              <h3 className="tech-category-title">DevOps</h3>
              <div className="tech-list">
                <span className="tech-item">Docker</span>
                <span className="tech-item">Kubernetes</span>
                <span className="tech-item">GitHub Actions</span>
                <span className="tech-item">DataDog</span>
                <span className="tech-item">Ansible</span>
              </div>
            </div>

            <div className="tech-category">
              <h3 className="tech-category-title">Cloud & AI</h3>
              <div className="tech-list">
                <span className="tech-item">AWS</span>
                <span className="tech-item">Vercel</span>
                <span className="tech-item">Render</span>
                <span className="tech-item">Cloudflare</span>
                <span className="tech-item">OpenAI APIs</span>
                <span className="tech-item">Cohere</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Open to senior engineering roles where I can build products that
            matter
          </p>

          <div className="contact-links">
            {/* eslint-disable-next-line no-useless-concat */}
            <a href={`mailto:${"jjplant.place" + "@" + "gmail.com"}`}
              className="contact-link"
              onClick={() => {
                // Optional: Track clicks or add analytics if needed
              }}
            >
              <FaEnvelope />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com/in/jayjavieryyc"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/jjplant"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          </div>

          <div className="contact-cta">
            <p>
              Currently seeking: <strong>Senior DevOps Engineer</strong> •{" "}
              <strong>Product Engineer</strong> •{" "}
              <strong>Creative Technologist</strong>
            </p>
            <p className="location">Calgary, AB • Remote-First</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            &copy; 2025 Jay Javier. Built with React • Deployed on GitHub Pages
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
