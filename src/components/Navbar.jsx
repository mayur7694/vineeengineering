import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand fw-bold" to="/">
        Vine Engineer
      </Link>

      <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div id="nav" className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="/services" className="nav-link">Services</Link></li>
          <li className="nav-item"><Link to="/projects" className="nav-link">Projects</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;