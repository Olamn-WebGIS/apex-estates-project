// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top shadow-sm px-3 py-3">
      <div className="container-fluid">
        {/* Brand Logo & Name */}
        <Link className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4 text-white text-decoration-none" to="/">
          {/* Custom CSS Geospatial Crosshair Emblem */}
          <div className="position-relative d-inline-block border border-info border-2 rounded-circle" style={{ width: '32px', height: '32px', borderStyle: 'dashed !important' }}>
            <div className="position-absolute bg-info" style={{ width: '2px', height: '100%', left: '50%', top: '0', transform: 'translateX(-50%)', opacity: '0.5' }}></div>
            <div className="position-absolute bg-info" style={{ height: '2px', width: '100%', top: '50%', left: '0', transform: 'translateY(-50%)', opacity: '0.5' }}></div>
            <div className="position-absolute bg-success rounded-circle top-50 start-50 translate-middle" style={{ width: '10px', height: '10px' }}></div>
          </div>
          <span style={{ trackingSpacing: '1px' }}>
            OLAMN <span className="text-info fw-medium fs-5 d-block d-sm-inline ms-sm-1" style={{ fontSize: '0.85rem' }}>WEBGIS</span>
          </span>
        </Link>

        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-md-center gap-2 mt-3 mt-md-0">
            <li className="nav-item">
              <Link className="nav-link text-white px-3" to="/">Home</Link>
            </li>
            <li className="nav-item mt-2 mt-md-0 ms-md-2">
              <Link className="btn btn-info px-4 py-2 text-white fw-semibold w-100" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;