import "./App.css";

const ROLES = ["Data Analyst", "Software Engineer", "Game Developer"];

function App() {
    // Mouse-move effect for Projects section
    const handleProjectsMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        // Store normalized mouse position (0–1) as CSS variables
        event.currentTarget.style.setProperty("--mouse-x", x.toString());
        event.currentTarget.style.setProperty("--mouse-y", y.toString());
    };

    const handleProjectsMouseLeave = (event) => {
        event.currentTarget.style.removeProperty("--mouse-x");
        event.currentTarget.style.removeProperty("--mouse-y");
    };

    return (
        <div className="page">
            {/* TOP NAV */}
            <header className="site-header">
                <div className="brand">Daniel</div>
                <nav className="site-nav">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <main>
                {/* HERO */}
                <section id="home" className="hero-section">
                    <div className="hero-overlay" />
                    <div className="hero-content">
                        <p className="hero-kicker">Portfolio</p>
                        <h1 className="hero-name">Daniel Ming</h1>

                        <p className="hero-roles">{ROLES.join("  |  ")}</p>

                        <div className="hero-icons">
                            <button className="icon-button" type="button">
                                <span className="icon-label">GH</span>
                            </button>
                            <button className="icon-button" type="button">
                                <span className="icon-label">in</span>
                            </button>
                            <a
                                className="icon-button"
                                href="mailto:d_ming@u.pacific.edu"
                            >
                                <span className="icon-label">✉</span>
                            </a>
                        </div>

                        <a href="#about" className="scroll-down" aria-label="Scroll down">
                            ⌄
                        </a>
                    </div>
                </section>

                {/* ABOUT */}
                <section id="about" className="section">
                    <div className="section-inner">
                        <h2>About</h2>
                        <p>
                            I'm a computer science–oriented developer with experience in
                            data analysis, software engineering, and game development. I enjoy
                            building tools that are both practical and fun to use.
                        </p>
                        <p>
                            Recently I've worked on security tooling, schedule-planning
                            apps, and small games. I like clean code, thoughtful UI, and
                            collaborating with people who care about shipping good work.
                        </p>
                    </div>
                </section>

                {/* PROJECTS */}
                <section
                    id="projects"
                    className="section section-alt section-projects"
                    onMouseMove={handleProjectsMouseMove}
                    onMouseLeave={handleProjectsMouseLeave}
                >
                    <div className="section-inner">
                        <h2>Projects</h2>
                        <p className="section-subtitle">
                            A few examples of things I've built.
                        </p>

                        <div className="project-grid">
                            <article className="project-card">
                                <h3>MLTL Verifier</h3>
                                <p>
                                    A Python tool that takes in MLTL formulas and checks for
                                    potential attack vectors in software systems, with a focus on
                                    testing and debugging.
                                </p>
                                <p className="project-tech">Python · Security · Tooling</p>
                            </article>

                            <article className="project-card">
                                <h3>Focus Zone</h3>
                                <p>
                                    A Java schedule builder built with a small team, using the ACM
                                    graphics library and Scrum practices to manage features and
                                    iterations.
                                </p>
                                <p className="project-tech">Java · UI · Team Project</p>
                            </article>

                            <article className="project-card">
                                <h3>Elder Tree</h3>
                                <p>
                                    A simple platformer created in a game engine, focusing on
                                    level design, game logic, and performance.
                                </p>
                                <p className="project-tech">Game Dev · Design · Logic</p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* CONTACT */}
                <section id="contact" className="section">
                    <div className="section-inner">
                        <h2>Contact</h2>
                        <p className="section-subtitle">
                            Open to internships, new grad roles, and interesting side
                            projects.
                        </p>
                        <p>
                            Email:{" "}
                            <a href="mailto:d_ming@u.pacific.edu">
                                d_ming@u.pacific.edu
                            </a>
                        </p>
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <small>© {new Date().getFullYear()} Daniel Kim · Built with React</small>
            </footer>
        </div>
    );
}

export default App;
