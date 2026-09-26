import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/home" className="logo">
        Sukoon...
      </Link>

      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/listen">Listen</Link>
        <Link to="/experiences">Experiences</Link>
        <Link to="/stories">Stories</Link>
      </div>
    </nav>
    
  );
}

export default Navbar;