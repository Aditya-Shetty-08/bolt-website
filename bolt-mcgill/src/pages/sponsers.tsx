import './Page.css';

const Sponsors = () => {
  const sponsors = [
    {
      id: 1,
      name: "TechCorp",
      tier: "Platinum",
      description: "Leading technology company supporting innovation and growth.",
    },
    {
      id: 2,
      name: "InnovateLabs",
      tier: "Gold",
      description: "Research and development partner driving cutting-edge solutions.",
    },
    {
      id: 3,
      name: "FutureTech",
      tier: "Gold",
      description: "Forward-thinking organization committed to technological advancement.",
    },
    {
      id: 4,
      name: "StartupHub",
      tier: "Silver",
      description: "Supporting emerging technologies and entrepreneurial ventures.",
    },
    {
      id: 5,
      name: "Digital Solutions Inc.",
      tier: "Silver",
      description: "Providing digital transformation services and expertise.",
    },
    {
      id: 6,
      name: "Cloud Ventures",
      tier: "Bronze",
      description: "Cloud infrastructure and services provider.",
    },
  ];

  const tierColors: { [key: string]: string } = {
    Platinum: "#e5e7eb",
    Gold: "#fbbf24",
    Silver: "#9ca3af",
    Bronze: "#cd7f32",
  };

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Our Sponsors</h1>
          <p className="page-subtitle">
            Thank you to our amazing partners and sponsors
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="sponsors-grid">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="sponsor-card">
                <div 
                  className="sponsor-tier"
                  style={{ 
                    backgroundColor: tierColors[sponsor.tier] || "#e5e7eb",
                    color: sponsor.tier === "Gold" ? "#000" : "#fff"
                  }}
                >
                  {sponsor.tier}
                </div>
                <h3 className="sponsor-name">{sponsor.name}</h3>
                <p className="sponsor-description">{sponsor.description}</p>
              </div>
            ))}
          </div>

          <div className="content-section">
            <h2>Become a Sponsor</h2>
            <p>
              Interested in supporting Bolt McGill? We're always looking for 
              partners who share our vision and values. Contact us to learn more 
              about sponsorship opportunities and how you can get involved.
            </p>
            <a href="mailto:sponsors@boltmcgill.com" className="cta-button">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
