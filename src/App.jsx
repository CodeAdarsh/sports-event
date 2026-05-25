import './App.css'

const categories = [
  {
    title: 'Football League',
    description: 'High-energy stadium matches for club and alumni teams.',
    icon: '⚽',
    color: 'var(--blue)',
  },
  {
    title: 'Cricket Open Cup',
    description: 'Day-long innings, powerplay battles, and boundary excitement.',
    icon: '🏏',
    color: 'var(--green)',
  },
  {
    title: 'Badminton Rally',
    description: 'Fast court action with singles, doubles, and expert serve play.',
    icon: '🏸',
    color: 'var(--orange)',
  },
  {
    title: 'Basketball Showdown',
    description: '3x3 and full-court tournaments for rising scorers and teams.',
    icon: '🏀',
    color: 'var(--purple)',
  },
  {
    title: 'Tennis Challenge',
    description: 'Singles, doubles, and mixed matchups on quality hard courts.',
    icon: '🎾',
    color: 'var(--secondary)',
  },
  {
    title: 'Track & Field',
    description: 'Sprint relays, hurdles, long jump, and relay championship finals.',
    icon: '🏃‍♂️',
    color: 'var(--pink, #ec4899)',
  },
]

const schedule = [
  {
    day: 'Friday',
    events: ['Cricket qualifiers', 'Football group stage', 'Badminton speed rounds'],
  },
  {
    day: 'Saturday',
    events: ['Basketball knockout matches', 'Tennis doubles bracket', 'Relay heats'],
  },
  {
    day: 'Sunday',
    events: ['Championship finals', 'Medal ceremonies', 'Athlete showcase games'],
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
              Experience football, cricket, badminton, basketball, tennis, and track
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
              Championship finals, record-breaking runs, and goal celebrations.
            </div>
            <div className="panel-card panel-card-bottom">
              Team warm-ups, athlete drills, and action-packed match play.
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
                <span className="category-icon" aria-hidden="true">
                  {category.icon}
                </span>
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
            <h2>Built for athletes and teams who thrive on competition.</h2>
            <p>
              Every event is hosted on official courts, pitches, and tracks with
              certified referees, live scoring, and medal recognition.
            </p>
          </div>
          <div className="about-list">
            <div className="feature-card">
              <h3>Official match rules</h3>
              <p>Certified referees and standard competition formats for every sport.</p>
            </div>
            <div className="feature-card">
              <h3>Live scoreboards</h3>
              <p>Track every game, match, and heat with real-time standings.</p>
            </div>
            <div className="feature-card">
              <h3>Medals & trophies</h3>
              <p>Champion awards for elite teams and standout athletes.</p>
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
