import './Page.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Founder & CEO",
      description: "Visionary leader with over 10 years of experience in technology and innovation.",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "CTO",
      description: "Technical expert specializing in cutting-edge solutions and system architecture.",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Head of Engineering",
      description: "Passionate engineer dedicated to building scalable and reliable systems.",
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "Head of Design",
      description: "Creative designer focused on creating beautiful and intuitive user experiences.",
    },
    {
      id: 5,
      name: "David Brown",
      role: "Head of Operations",
      description: "Operations specialist ensuring smooth workflows and efficient processes.",
    },
    {
      id: 6,
      name: "Emily Davis",
      role: "Head of Marketing",
      description: "Marketing strategist driving growth and building strong brand presence.",
    },
  ];

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Our Team</h1>
          <p className="page-subtitle">
            Meet the talented individuals who make Bolt McGill great
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-avatar">
                  <div className="avatar-placeholder">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
