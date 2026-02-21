import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Bolt McGill</h1>
          <p className="hero-subtitle">
            Empowering innovation and excellence in technology
          </p>
          <p className="hero-description">
            We are a dynamic organization dedicated to fostering technological 
            advancement and creating opportunities for growth. Join us on our 
            journey to make a meaningful impact in the world of technology.
          </p>
          <div className="hero-buttons">
            <a href="/about" className="btn btn-primary">Learn More</a>
            <a href="/team" className="btn btn-secondary">Meet the Team</a>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Innovation</h3>
              <p>
                We push the boundaries of what's possible, constantly exploring 
                new technologies and methodologies to stay ahead of the curve.
              </p>
            </div>
            <div className="feature-card">
              <h3>Collaboration</h3>
              <p>
                We believe in the power of teamwork and collaboration to achieve 
                extraordinary results and solve complex challenges.
              </p>
            </div>
            <div className="feature-card">
              <h3>Excellence</h3>
              <p>
                We strive for excellence in everything we do, maintaining the 
                highest standards of quality and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
