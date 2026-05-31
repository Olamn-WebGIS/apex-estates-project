// src/pages/Home.jsx
import React, { useState } from 'react';
import { propertiesData } from '../data/properties';
import { Link } from 'react-router-dom';

function Home() {
  const [filterType, setFilterType] = useState('All');

  const filteredHomes = filterType === 'All' 
    ? propertiesData 
    : propertiesData.filter(home => home.type === filterType);

  return (
    <div className="w-100 overflow-hidden bg-light">
      
      {/* 1. Premium Hero Section */}
      <div 
        className="text-white py-5 text-center px-3 d-flex align-items-center" 
        style={{ 
          minHeight: '65vh',
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80") center/cover no-repeat' 
        }}
      >
        <div className="container py-5">
          <span className="badge bg-primary px-3 py-2 rounded-pill mb-3 text-uppercase fw-bold tracking-wider">The Standard of Luxury</span>
          <h1 className="display-4 fw-bold text-wrap mb-3">Own a Piece of Premium Real Estate</h1>
          <p className="lead fs-5 max-width-600 mx-auto text-light-50 mb-4">
            Discover modern, verified, and fully serviced smart residential homes in Nigeria's most secure neighborhoods.
          </p>
          
          {/* Quick Responsive Filter Buttons */}
          <div className="mt-4 d-flex flex-wrap justify-content-center gap-2">
            <button onClick={() => setFilterType('All')} className={`btn btn-lg px-4 py-2 fw-semibold ${filterType === 'All' ? 'btn-primary' : 'btn-outline-light'}`}>All Properties</button>
            <button onClick={() => setFilterType('Sale')} className={`btn btn-lg px-4 py-2 fw-semibold ${filterType === 'Sale' ? 'btn-primary' : 'btn-outline-light'}`}>For Sale</button>
            <button onClick={() => setFilterType('Rent')} className={`btn btn-lg px-4 py-2 fw-semibold ${filterType === 'Rent' ? 'btn-primary' : 'btn-outline-light'}`}>For Rent</button>
          </div>
        </div>
      </div>

      {/* 2. Core Stats Bar (Builds Instant Trust) */}
      <div className="bg-white py-4 shadow-sm border-bottom">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-6 col-md-3">
              <h3 className="fw-bold text-primary mb-0">₦45B+</h3>
              <small className="text-muted text-uppercase fw-semibold">Property Managed</small>
            </div>
            <div className="col-6 col-md-3">
              <h3 className="fw-bold text-primary mb-0">1,200+</h3>
              <small className="text-muted text-uppercase fw-semibold">Happy Clients</small>
            </div>
            <div className="col-6 col-md-3">
              <h3 className="fw-bold text-primary mb-0">100%</h3>
              <small className="text-muted text-uppercase fw-semibold">Verified C of O</small>
            </div>
            <div className="col-6 col-md-3">
              <h3 className="fw-bold text-primary mb-0">24/7</h3>
              <small className="text-muted text-uppercase fw-semibold">Client Support</small>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Featured Property Listings Section */}
      <div className="container my-5 py-3 px-3">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">Our Handpicked Exclusives</h2>
          <p className="text-muted">Explore architectural gems with top-tier valuations and premium returns.</p>
        </div>
        
        <div className="row g-4 justify-content-center">
          {filteredHomes.map(home => (
            <div key={home.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow border-0 rounded-3 overflow-hidden bg-white">
                <div style={{ position: 'relative' }}>
                  <img src={home.image} className="card-img-top" alt={home.title} style={{ height: '240px', objectFit: 'cover' }} />
                  <span className={`badge position-absolute top-0 start-0 m-3 fs-6 p-2 ${home.type === 'Sale' ? 'bg-danger' : 'bg-success'}`}>{home.type}</span>
                </div>
                
                <div className="card-body d-flex flex-column justify-content-between p-4">
                  <div>
                    <h5 className="card-title fw-bold text-dark mb-2 fs-5">{home.title}</h5>
                    <p className="text-muted small mb-3">📍 {home.location}</p>
                    <h4 className="text-primary fw-bold mb-3">{home.price}</h4>
                  </div>
                  
                  <div>
                    <div className="d-flex justify-content-between text-muted border-top pt-3 small fw-semibold">
                      <span>🛌 {home.beds} Beds</span>
                      <span>🛁 {home.baths} Baths</span>
                      <span>📐 {home.sqft}</span>
                    </div>
                    <Link to={`/property/${home.id}`} className="btn btn-primary w-100 mt-3 py-2 fw-semibold shadow-sm">View Full Details</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. "Why Choose Us" Value Matrix Section */}
      <div className="bg-white py-5 border-top border-bottom">
        <div className="container py-3">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark">Why Smart Investors Choose ApexEstates</h2>
            <p className="text-muted max-width-600 mx-auto">We eliminate the stress, risk, and fraud out of properties acquisition and management.</p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-4 text-center px-3">
              <div className="p-4 rounded-3 bg-light h-100">
                <div className="fs-1 mb-3">🛡️</div>
                <h5 className="fw-bold text-dark mb-2">100% Legal Safeguard</h5>
                <p className="text-muted small mb-0">Every property goes through a rigorous internal multi-level title check. Zero legal bottlenecks, guaranteed.</p>
              </div>
            </div>
            <div className="col-12 col-md-4 text-center px-3">
              <div className="p-4 rounded-3 bg-light h-100">
                <div className="fs-1 mb-3">💰</div>
                <h5 className="fw-bold text-dark mb-2">High Yield Yielding Asset</h5>
                <p className="text-muted small mb-0">Our portfolio focuses specifically on premium locations with high annual rental returns and rapid equity growth.</p>
              </div>
            </div>
            <div className="col-12 col-md-4 text-center px-3">
              <div className="p-4 rounded-3 bg-light h-100">
                <div className="fs-1 mb-3">🤝</div>
                <h5 className="fw-bold text-dark mb-2">Flexible Payment Structures</h5>
                <p className="text-muted small mb-0">We work directly with developers to provide convenient, customized installment layout plans tailored to your cashflow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Client Testimonials Section (Social Proof) */}
      <div className="container my-5 py-3">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">Words From Our Homeowners</h2>
          <p className="text-muted">Hear from executives and families who trusted our team.</p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-6">
            <div className="card border-0 shadow-sm p-4 bg-white rounded-3 h-100">
              <p className="text-muted italic mb-3">"Buying real estate in Lagos from diaspora is usually terrifying. ApexEstates handled the title verification and physical architecture inspection reports perfectly. Highly recommended!"</p>
              <div className="d-flex align-items-center gap-3">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '45px', height: '45px' }}>DO</div>
                <div>
                  <h6 className="fw-bold text-dark mb-0">Dr. Olumide O.</h6>
                  <small className="text-muted">Diaspora Investor</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card border-0 shadow-sm p-4 bg-white rounded-3 h-100">
              <p className="text-muted italic mb-3">"Their flexible installment payment blueprint allowed my tech firm to secure a corporate apartment space in Ikoyi seamlessly without running out of operational working capital."</p>
              <div className="d-flex align-items-center gap-3">
                <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '45px', height: '45px' }}>FA</div>
                <div>
                  <h6 className="fw-bold text-dark mb-0">Favour A.</h6>
                  <small className="text-muted">Tech Founder</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;