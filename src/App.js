import './App.css';

// ==============================================================
// DATA ARRAYS
// Edit the arrays below to update content without touching markup.
// TODO: Move these to a separate `src/data/content.js` file once
//       the site grows, so content and layout are cleanly separated.
// ==============================================================

// --- Skill areas shown in the "What You Learn" section ---
// TODO: Replace emoji icons with imported SVG components
const SKILL_AREAS = [
  {
    icon: '💡',
    title: 'Design Thinking',
    description:
      'Explore creative problem solving to arrive at innovative solutions that put users first.',
  },
  {
    icon: '💻',
    title: 'Development',
    description:
      'Build functional products and working prototypes to meet real business needs.',
  },
  {
    icon: '🎨',
    title: 'UX/UI Design',
    description:
      'Enable user-friendly experiences and learn key design principles that delight users.',
  },
  {
    icon: '📈',
    title: 'Business Strategy',
    description:
      'Grow your platform and thrive in the world of digital business and startups.',
  },
];

// --- Mission pillars shown in the "What We Stand For" section ---
const MISSION_PILLARS = [
  {
    number: '01',
    title: 'Accelerate',
    description:
      'Foster entrepreneurship and innovation amongst top undergrads by connecting talent across faculties.',
  },
  {
    number: '02',
    title: 'Integrate',
    description:
      "Stimulate intensive inter-faculty collaboration to build McGill's business tech atmosphere.",
  },
  {
    number: '03',
    title: 'Innovate',
    description:
      'Design, create and build an impactful experience for a real-life problem with a tangible prototype.',
  },
];

// --- Past bootcamp projects ---
// TODO: Add new entries after each bootcamp; consider pulling from CMS
const PAST_PROJECTS = [
  {
    season: 'Fall 2018',
    title: 'Venture App',
    description:
      'Student teams designed and built apps and business plans to tackle urban mobility challenges in Montreal.',
    prompt: '"How can we solve traffic congestion in Montreal?"',
  },
  // TODO: Add more past bootcamp projects here:
  // { season: 'Winter 2019', title: '...', description: '...', prompt: '...' },
];

// --- Company sponsors ---
// TODO: Once logo images are available, switch each item to
//       { name: 'Deloitte', logo: deloitteLogo } and update the badge
const SPONSORS = [
  'Element AI',
  'Cadence',
  'AppDirect',
  'Holt',
  'Deloitte',
  'Sonder',
  'NMG',
  'Levio',
  'Microsoft',
];

// --- Team / founders ---
// TODO: Add a `photo` field per member once headshots are available
// TODO: Add current exec team members beyond founders
const TEAM_MEMBERS = [
  {
    name: 'Nicole Shum',
    role: 'Co-Founder',
    initials: 'NS',
    bio: 'BCom at McGill Desautels specializing in Information Systems and Retail Management. Background in B2B tech and startups.',
  },
  {
    name: 'Thomas Villeneuve',
    role: 'Co-Founder',
    initials: 'TV',
    bio: 'BCom at McGill Desautels focusing on Finance and Computer Science. Background in incubators and data analytics.',
  },
  // TODO: Add current exec team:
  // { name: '...', role: 'President', initials: '..', bio: '...' },
];

// --- Social media links ---
// TODO: Verify these handles / URLs are current
const SOCIAL_LINKS = [
  {
    platform: 'LinkedIn',
    handle: '@boltbootcamp',
    href: 'https://www.linkedin.com/company/boltbootcamp',
    icon: '🔗',
  },
  {
    platform: 'Facebook',
    handle: '@BOLTMcGill',
    href: 'https://www.facebook.com/BOLTMcGill',
    icon: '📘',
  },
  {
    platform: 'Instagram',
    handle: '@bolt.mcgill',
    href: 'https://www.instagram.com/bolt.mcgill',
    icon: '📸',
  },
  // TODO: Add Twitter/X if BOLT has an account
];


// ==============================================================
// NAVBAR
// ==============================================================
// TODO: Add scroll event listener — change background from
//       transparent to blurred dark once user scrolls past hero
// TODO: Add mobile hamburger menu (hide .navbar__links on small screens,
//       show a drawer/modal triggered by a menu icon)
// TODO: Highlight the active nav link based on scroll position
//       (Intersection Observer on each section)
// ==============================================================
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar__inner">

        {/* Brand logo — TODO: Replace text with SVG lightning bolt logo */}
        <a href="#home" className="navbar__logo">
          BOLT<span>.</span>
        </a>

        {/* Desktop nav links */}
        {/* TODO: On mobile ≤768px these are hidden — build a drawer here */}
        <ul className="navbar__links">
          <li><a href="#about"    className="navbar__link">About</a></li>
          <li><a href="#skills"   className="navbar__link">Skills</a></li>
          <li><a href="#mission"  className="navbar__link">Mission</a></li>
          <li><a href="#projects" className="navbar__link">Events</a></li>
          <li><a href="#sponsors" className="navbar__link">Sponsors</a></li>
          <li><a href="#team"     className="navbar__link">Team</a></li>
          <li><a href="#contact"  className="navbar__link">Contact</a></li>
        </ul>

        {/* CTA button — TODO: Link to actual application form URL */}
        <a href="#contact" className="navbar__apply">APPLY</a>

      </div>
    </nav>
  );
}


// ==============================================================
// HERO SECTION
// ==============================================================
// TODO: Add animated background — particle field, lightning bolt
//       paths, or a looping video from past bootcamps
// TODO: Add entrance animations: headline fades up, description
//       fades up 100ms later, buttons 200ms later (CSS keyframes
//       or a library like Framer Motion)
// TODO: Add a subtle scroll-indicator arrow at the bottom
// ==============================================================
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero__content">

          {/* Eyebrow — small context line above the headline */}
          <span className="hero__eyebrow">McGill University · Since 2018</span>

          {/* Main headline — <em> wraps the yellow-highlighted words */}
          <h1 className="hero__title">
            Student-run<br />
            <em>Business Tech</em><br />
            Bootcamps
          </h1>

          {/* Supporting tagline */}
          <p className="hero__description">
            BOLT is a unique combination of a hackathon and a case competition
            for students to delve into the world of business technology —
            bridging developers, designers, and business leaders.
          </p>

          {/* CTA buttons */}
          {/* TODO: Wire primary CTA to real application form */}
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">Apply Now</a>
            <a href="#about"   className="btn btn--secondary">Learn More</a>
          </div>

        </div>
      </div>
    </section>
  );
}


// ==============================================================
// ABOUT SECTION
// ==============================================================
// TODO: Animate stat numbers counting up from 0 when they scroll
//       into view (Intersection Observer + requestAnimationFrame)
// TODO: Replace placeholder stats with real verified numbers
// TODO: Replace the lightning bolt placeholder with an actual photo
//       or a short video reel from past bootcamps
// ==============================================================
function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <div className="about__grid">

          {/* LEFT column: text + stats */}
          <div className="about__text">
            <p className="section__label">About BOLT</p>
            <h2 className="section__title">Why does BOLT exist?</h2>
            <p className="section__subtitle">
              Nicole Shum and Thomas Villeneuve founded BOLT in 2018 to address
              the lack of integrated opportunities combining STEM and management
              talent at McGill. Today BOLT sheds light on the growing
              interdependence between developers, designers, and business leaders.
            </p>

            {/* Stats grid — TODO: Update with real numbers */}
            <div className="about__stats">
              <div className="stat">
                <div className="stat__number">2018</div>
                <div className="stat__label">Founded at McGill</div>
              </div>
              <div className="stat">
                {/* TODO: Replace with actual bootcamp count */}
                <div className="stat__number">3+</div>
                <div className="stat__label">Bootcamps Completed</div>
              </div>
              <div className="stat">
                {/* TODO: Replace with actual participant count */}
                <div className="stat__number">100+</div>
                <div className="stat__label">Students Reached</div>
              </div>
              <div className="stat">
                <div className="stat__number">9+</div>
                <div className="stat__label">Industry Sponsors</div>
              </div>
            </div>
          </div>

          {/* RIGHT column: visual placeholder */}
          {/* TODO: Replace with <img src={bootcampPhoto} alt="BOLT bootcamp" /> */}
          {/* TODO: Or embed a short looping video: <video autoPlay muted loop /> */}
          <div className="about__visual">
            <span className="about__visual-placeholder" role="img" aria-label="lightning bolt">⚡</span>
          </div>

        </div>
      </div>
    </section>
  );
}


// ==============================================================
// SKILLS SECTION
// ==============================================================
// TODO: Replace emoji in SKILL_AREAS with custom SVG icon imports
// TODO: Add a hover state that expands a card to show more detail
// TODO: Add scroll-triggered entrance: cards stagger up on reveal
// ==============================================================
function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section__label">What You Learn</p>
        <h2 className="section__title">
          Build New Skillsets Directly<br />Relevant to Your Future Career
        </h2>
        <p className="section__subtitle">
          Learn from industry leaders in North America across four core disciplines.
        </p>

        {/* Cards generated from SKILL_AREAS array at the top of this file */}
        <div className="skills__grid">
          {SKILL_AREAS.map((skill) => (
            <div key={skill.title} className="skill-card">
              {/* TODO: Swap emoji for <img src={skill.icon} alt="" aria-hidden="true" /> */}
              <div className="skill-card__icon" role="img" aria-hidden="true">
                {skill.icon}
              </div>
              <h3 className="skill-card__title">{skill.title}</h3>
              <p className="skill-card__desc">{skill.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


// ==============================================================
// MISSION SECTION
// ==============================================================
// TODO: On desktop, add a horizontal animated line connecting
//       the three pillars to visually link them
// TODO: Add staggered entrance animation on scroll
// ==============================================================
function Mission() {
  return (
    <section id="mission" className="section section--alt">
      <div className="container">
        <p className="section__label">Our Mission</p>
        <h2 className="section__title">What We Stand For</h2>

        {/* Pillar cards from MISSION_PILLARS array */}
        <div className="mission__grid">
          {MISSION_PILLARS.map((pillar) => (
            <div key={pillar.title} className="mission-pillar">
              {/* Large decorative number (background) */}
              <div className="mission-pillar__number" aria-hidden="true">
                {pillar.number}
              </div>
              <h3 className="mission-pillar__title">{pillar.title}</h3>
              <p className="mission-pillar__desc">{pillar.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


// ==============================================================
// PAST PROJECTS / EVENTS SECTION
// ==============================================================
// TODO: Add cover images per project card (a photo from the event)
// TODO: Add a video embed or link to a demo reel
// TODO: Build a /past-events route and link the "View All" button
// TODO: Add a "Upcoming Events" tab/toggle so this section handles both
// ==============================================================
function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">

        {/* Section header with "View All" CTA on the right */}
        <div className="projects__header">
          <div>
            <p className="section__label">Past Events</p>
            <h2 className="section__title">See the Quality of BOLT Student Demos</h2>
          </div>
          {/* TODO: Link to a full archive / past events page */}
          <a href="#projects" className="btn btn--secondary">View All Projects</a>
        </div>

        <div className="projects__grid">

          {/* Past project cards from PAST_PROJECTS array */}
          {PAST_PROJECTS.map((project) => (
            <div key={`${project.season}-${project.title}`} className="project-card">
              <p className="project-card__season">{project.season}</p>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              {/* The challenge prompt as a styled blockquote */}
              <blockquote className="project-card__prompt">{project.prompt}</blockquote>
            </div>
          ))}

          {/* "Coming Soon" teaser card for the next bootcamp */}
          {/* TODO: Replace with real next event details once confirmed */}
          {/* TODO: Add a countdown timer component here */}
          <div className="project-card" style={{ borderStyle: 'dashed', borderColor: 'var(--color-border-accent)' }}>
            <p className="project-card__season">Coming Soon</p>
            <h3 className="project-card__title">Next Bootcamp</h3>
            <p className="project-card__desc">
              Applications for the next BOLT bootcamp are opening soon.
              Follow our social media for announcements on dates and themes.
            </p>
            {/* TODO: Link to the real application form */}
            <a href="#contact" className="btn btn--primary" style={{ marginTop: 'auto' }}>
              Apply Now
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}


// ==============================================================
// SPONSORS SECTION
// ==============================================================
// TODO: Get logo assets from sponsors and replace text badges
// TODO: Group sponsors into tiers: Platinum / Gold / Silver
// TODO: Add a link to a downloadable sponsorship package PDF
// ==============================================================
function Sponsors() {
  return (
    <section id="sponsors" className="section section--alt">
      <div className="container sponsors__center">
        <p className="section__label">Our Sponsors</p>
        <h2 className="section__title">Backed by Industry Leaders</h2>
        <p className="section__subtitle">
          We partner with leading companies across North America to deliver
          world-class bootcamp experiences for McGill students.
        </p>

        {/* Sponsor badges from SPONSORS array */}
        {/* TODO: Replace each badge with <img src={sponsor.logo} alt={sponsor.name} /> */}
        <div className="sponsors__grid">
          {SPONSORS.map((name) => (
            <div key={name} className="sponsor-badge">{name}</div>
          ))}
        </div>

        {/* Sponsor CTA */}
        <div className="sponsors__cta">
          <p className="sponsors__cta-label">Interested in sponsoring BOLT?</p>
          {/* TODO: Link to sponsorship deck or contact form */}
          <a href="#contact" className="btn btn--primary">Get in Touch</a>
        </div>

      </div>
    </section>
  );
}


// ==============================================================
// TEAM SECTION
// ==============================================================
// TODO: Add headshot photo to each TEAM_MEMBERS entry and swap
//       the initials avatar for <img src={member.photo} ... />
// TODO: Add LinkedIn href to each member and render an icon link
// TODO: Add current exec team members beyond the founders
// ==============================================================
function Team() {
  return (
    <section id="team" className="section">
      <div className="container">
        <p className="section__label">The Team</p>
        <h2 className="section__title">Meet the Founders</h2>
        <p className="section__subtitle">
          BOLT was created by two McGill students who saw a gap between STEM
          and management talent on campus — and decided to build the bridge.
        </p>

        {/* Team cards from TEAM_MEMBERS array */}
        <div className="team__grid">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="team-card">

              {/* Avatar — initials placeholder, swap for <img> */}
              <div className="team-card__avatar" aria-hidden="true">
                {member.initials}
              </div>

              <div>
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
                <p className="team-card__bio">{member.bio}</p>
                {/* TODO: Add LinkedIn icon link: */}
                {/* <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> */}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


// ==============================================================
// CONTACT / SOCIAL SECTION
// ==============================================================
// TODO: Build a contact form component (name, email, message)
//       and wire it up to Formspree or EmailJS
// TODO: Verify social handles in SOCIAL_LINKS array are current
// TODO: Add BOLT's McGill email address once confirmed
// ==============================================================
function Contact() {
  return (
    <section id="contact" className="section section--alt contact">
      <div className="container">

        <p className="section__label">Stay Connected</p>
        <h2 className="section__title">Get in Touch</h2>
        <p className="section__subtitle">
          Follow us on social media for updates on upcoming bootcamps,
          applications open dates, and student showcases.
        </p>

        {/* Social links from SOCIAL_LINKS array */}
        <div className="social__links">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social__link"
            >
              <span role="img" aria-hidden="true">{link.icon}</span>
              <span>{link.platform}</span>
              <span className="social__link__handle">{link.handle}</span>
            </a>
          ))}
        </div>

        {/* TODO: Add contact form component below */}
        {/* <ContactForm /> */}

        {/* Final apply CTA at the bottom */}
        <div className="contact__cta">
          <h3>Ready to Build Something?</h3>
          {/* TODO: Link to the actual BOLT application form */}
          <a href="#home" className="btn btn--primary">Apply to BOLT</a>
        </div>

      </div>
    </section>
  );
}


// ==============================================================
// FOOTER
// ==============================================================
// TODO: Add more footer columns: quick links, socials, newsletter
// TODO: Add newsletter sign-up email input + submission handler
// ==============================================================
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        {/* Top row: brand + links */}
        <div className="footer__inner">
          <div className="footer__brand">BOLT.</div>

          {/* Quick links — TODO: Replace # hrefs with real routes */}
          <ul className="footer__links">
            <li><a href="#about"    className="footer__link">About</a></li>
            <li><a href="#projects" className="footer__link">Events</a></li>
            <li><a href="#sponsors" className="footer__link">Sponsors</a></li>
            <li><a href="#team"     className="footer__link">Team</a></li>
            <li><a href="#contact"  className="footer__link">Contact</a></li>
          </ul>
        </div>

        {/* Bottom bar: copyright */}
        <div className="footer__bottom">
          <p>© {year} BOLT Bootcamps · McGill University</p>
          {/* TODO: Add Privacy Policy and Terms links once pages exist */}
          <p>Built by BOLT</p>
        </div>

      </div>
    </footer>
  );
}


// ==============================================================
// ROOT APP COMPONENT
// ==============================================================
// Reorder or comment out sections here to restructure the page.
// Each section is its own component above — edit them independently.
// ==============================================================
function App() {
  return (
    <div className="app">

      {/* Fixed navigation bar */}
      <Navbar />

      <main>
        {/* ↓ Page sections — reorder as needed ↓ */}
        <Hero />
        <About />
        <Skills />
        <Mission />
        <Projects />
        <Sponsors />
        <Team />
        <Contact />
        {/* ↑ Add new sections above this line ↑ */}
      </main>

      <Footer />

    </div>
  );
}

export default App;
