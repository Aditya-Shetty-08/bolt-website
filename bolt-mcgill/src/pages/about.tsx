import './Page.css';

const About = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">
            Learn more about Bolt McGill and our mission
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="content-section">
            <h2>Our Mission</h2>
            <p>
              At Bolt McGill, we are dedicated to fostering innovation and excellence 
              in technology. Our mission is to empower individuals and organizations 
              to achieve their full potential through cutting-edge solutions and 
              collaborative partnerships.
            </p>
          </div>

          <div className="content-section">
            <h2>Who We Are</h2>
            <p>
              We are a dynamic team of passionate professionals committed to pushing 
              the boundaries of what's possible. With a focus on quality, innovation, 
              and collaboration, we strive to make a meaningful impact in everything we do.
            </p>
          </div>

          <div className="content-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Innovation</h3>
                <p>
                  We constantly explore new technologies and methodologies to stay 
                  ahead of the curve and deliver exceptional results.
                </p>
              </div>
              <div className="value-card">
                <h3>Excellence</h3>
                <p>
                  We maintain the highest standards of quality and professionalism 
                  in all our endeavors.
                </p>
              </div>
              <div className="value-card">
                <h3>Collaboration</h3>
                <p>
                  We believe in the power of teamwork and working together to 
                  achieve extraordinary outcomes.
                </p>
              </div>
              <div className="value-card">
                <h3>Integrity</h3>
                <p>
                  We conduct our business with honesty, transparency, and ethical 
                  practices at all times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
