import './App.css'

const categories = [
  {
    title: 'Football League',
    description: 'Co-ed teams compete in fast-paced matches across the main stadiums.',
    color: 'var(--blue)',
  },
  {
    title: 'Basketball Showdown',
    description: 'Indoor courts with 3x3 and full-court divisions for every age group.',
    color: 'var(--orange)',
  },
  {
    title: 'Track & Field',
    description: 'Sprint, relay, long jump, and shot put events powered by open-air energy.',
    color: 'var(--green)',
  },
  {
    title: 'Family Fun Zone',
    description: 'Kids relays, obstacle challenges, and weekend activities for families.',
    color: 'var(--purple)',
  },
]

const schedule = [
  {
    day: 'Friday',
    events: ['Opening ceremony', 'Football group stage', 'Youth track heats'],
  },
  {
    day: 'Saturday',
    events: ['Basketball knockout rounds', 'Family festival', 'Community fitness clinic'],
  },
  {
    day: 'Sunday',
    events: ['Track finals', 'Championship showcase', 'Awards & closing party'],
  },
]

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <strong>SportsFest</strong>
          <span>2026</span>
        </div>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#categories">Categories</a>
          <a href="#schedule">Schedule</a>
          <a href="#about">About</a>
          <a href="#register">Register</a>
        </nav>
        <a href="#register" className="button button-primary">
          Register
        </a>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">Multi-category sports festival</span>
            <h1>Compete, celebrate, and connect across every field.</h1>
            <p className="hero-text">
              Experience football, basketball, track & field, and family-friendly
              competitions designed for athletes, teams, and supporters.
            </p>
            <div className="hero-actions">
              <a href="#register" className="button button-primary">
                Register your team
              </a>
              <a href="#categories" className="button button-secondary">
                Browse categories
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <strong>12</strong>
                <span>Categories</span>
              </div>
              <div>
                <strong>20+</strong>
                <span>Prizes</span>
              </div>
              <div>
                <strong>5,000+</strong>
                <span>Participants</span>
              </div>
            </div>
          </div>
          <div className="hero-panel" aria-hidden="true">
            <div className="panel-card panel-card-top">
              Opening ceremony, live music, and sponsor village.
            </div>
            <div className="panel-card panel-card-bottom">
              Family zone, food trucks, and pro showcase sessions.
            </div>
          </div>
        </section>

        <section id="categories" className="categories-section">
          <div className="section-heading">
            <span className="section-tag">Event Categories</span>
            <h2>Choose the competition that fits your team.</h2>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <article key={category.title} className="category-card">
                <div className="category-label" style={{ background: category.color }} />
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="schedule" className="schedule-section">
          <div className="section-heading">
            <span className="section-tag">Weekend schedule</span>
            <h2>See the full lineup of games and activities.</h2>
          </div>
          <div className="schedule-grid">
            {schedule.map((item) => (
              <div key={item.day} className="schedule-card">
                <h3>{item.day}</h3>
                <ul>
                  {item.events.map((event) => (
                    <li key={event}>{event}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-copy">
            <span className="section-tag">Why SportsFest</span>
            <h2>Designed for athletes, families, and local communities.</h2>
            <p>
              From competitive leagues to relaxed challenge zones, SportsFest brings
              every athlete together with a festival atmosphere, easy registration,
              and elevated event production.
            </p>
          </div>
          <div className="about-list">
            <div className="feature-card">
              <h3>Professional venues</h3>
              <p>High-quality courts, tracks, and fields for every event.</p>
            </div>
            <div className="feature-card">
              <h3>Family-friendly</h3>
              <p>Kids activities, spectator zones, and weekend entertainment.</p>
            </div>
            <div className="feature-card">
              <h3>Real-time results</h3>
              <p>Live scores, standings, and updates across every competition.</p>
            </div>
          </div>
        </section>

        <section id="register" className="register-section">
          <div className="register-card">
            <div>
              <span className="section-tag">Join the event</span>
              <h2>Secure your spot before the weekend fills up.</h2>
            </div>
            <a href="#" className="button button-primary button-large">
              Start registration
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>SportsFest 2026</strong>
          <p>All-ages competition, community events, and live festival activities.</p>
        </div>
        <div className="footer-links">
          <a href="#categories">Categories</a>
          <a href="#schedule">Schedule</a>
          <a href="#register">Register</a>
        </div>
      </footer>
    </div>
  )
}

export default App
