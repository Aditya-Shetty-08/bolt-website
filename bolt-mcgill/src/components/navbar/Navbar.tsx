import './Navbar.css';
import NavigationMenu from './navigation-menu';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/home">
            <img 
              src={"/bolt-logo.png"} 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
              alt="Bolt McGill Logo" 
            />
            <span>BOLT</span>
          </a>
        </div>
        <NavigationMenu />
      </div>
    </nav>
  );
};

export default Navbar;


