import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/home" className="logo">
        sukoon.
      </Link>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/home" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <Link to="/listen" onClick={() => setMenuOpen(false)}>
          Listen
        </Link>

        <Link to="/experiences" onClick={() => setMenuOpen(false)}>
          Experiences
        </Link>

        <Link to="/stories" onClick={() => setMenuOpen(false)}>
          Stories
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;