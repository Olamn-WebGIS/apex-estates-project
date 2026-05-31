// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto border-top border-secondary">
      <div className="container px-4 text-md-start text-center">
        <div className="row g-4">
          
          {/* Brand Column with Custom Logo */}
          <div className="col-12 col-md-4">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-3">
              {/* Custom CSS Geospatial Crosshair Emblem */}
              <div className="position-relative d-inline-block border border-info border-2 rounded-circle" style={{ width: '36px', height: '36px', borderStyle: 'dashed !important' }}>
                <div className="position-absolute bg-info" style={{ width: '2px', height: '100%', left: '50%', top: '0', transform: 'translateX(-50%)', opacity: '0.5' }}></div>
                <div className="position-absolute bg-info" style={{ height: '2px', width: '100%', top: '50%', left: '0', transform: 'translateY(-50%)', opacity: '0.5' }}></div>
                <div className="position-absolute bg-success rounded-circle top-50 start-50 translate-middle" style={{ width: '12px', height: '12px' }}></div>
              </div>
              <h5 className="fw-bold text-white mb-0 text-start m-0 lh-1">
                OLAMN <span className="text-info d-block fs-6 mt-1" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>WEBGIS</span>
              </h5>
            </div>
            <p className="small text-light-50 lh-base" style={{ color: '#bbb' }}>
              Premium geospatial intelligence and interactive Web GIS property solutions. Mapping verified luxury real estate landscapes with precision infrastructure.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="col-12 col-sm-6 col-md-4">
            <h6 className="text-uppercase fw-bold text-white mb-3 small tracking-wider">Explore Link Pages</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><Link to="/" className="text-decoration-none" style={{ color: '#bbb' }}>Featured Listings</Link></li>
              <li><Link to="/login" className="text-decoration-none" style={{ color: '#bbb' }}>Investor Login</Link></li>
              <li><Link to="/signup" className="text-decoration-none" style={{ color: '#bbb' }}>Create Account</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-12 col-sm-6 col-md-4">
            <h6 className="text-uppercase fw-bold text-white mb-3 small tracking-wider">Corporate Office</h6>
            <p className="small mb-1" style={{ color: '#bbb' }}>📍 Lagos, Nigeria</p>
            <p className="small mb-1" style={{ color: '#bbb' }}>📞 +234 (0) 803-000-0000</p>
            <p className="small" style={{ color: '#bbb' }}>✉️ info@olamnwebgis.com</p>
          </div>

        </div>

        <hr className="my-4 border-secondary" />

        {/* Legal Copyright Line */}
        <div className="row align-items-center small text-center text-md-between">
          <div className="col-12 col-md-6 text-md-start mb-2 mb-md-0" style={{ color: '#888' }}>
            © {new Date().getFullYear()} Olamn WebGIS. All rights reserved.
          </div>
          <div className="col-12 col-md-6 text-md-end">
            <span style={{ color: '#888' }}>Geospatial Architecture Secures Real Estate Investments.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;