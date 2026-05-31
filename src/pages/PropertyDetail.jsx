// src/pages/PropertyDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { propertiesData } from '../data/properties';

function PropertyDetail() {
  const { id } = useParams();
  const property = propertiesData.find(item => item.id === parseInt(id));

  if (!property) {
    return (
      <div className="container text-center my-5 py-5">
        <h3 className="fw-bold">Property Not Found</h3>
        <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container my-4 my-md-5 px-3">
      <Link to="/" className="btn btn-outline-secondary mb-4 btn-sm px-3">← Back to Listings</Link>

      <div className="row g-4">
        {/* Large Media Display */}
        <div className="col-12 col-lg-7">
          <div className="rounded-3 overflow-hidden shadow-sm">
            <img src={property.image} className="img-fluid w-100" alt={property.title} style={{ maxHeight: '450px', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Property Specs Block */}
        <div className="col-12 col-lg-5">
          <div className="card border-0 shadow-sm p-4 h-100 bg-white rounded-3">
            <span className={`badge align-self-start mb-2 fs-6 p-2 ${property.type === 'Sale' ? 'bg-danger' : 'bg-success'}`}>For {property.type}</span>
            <h1 className="fw-bold text-dark fs-3 mb-2">{property.title}</h1>
            <p className="text-muted"><i className="bi bi-geo-alt-fill text-primary"></i> {property.location}</p>
            <h2 className="text-primary fw-bold my-3">{property.price}</h2>
            
            <div className="row g-2 text-center my-3 bg-light p-3 rounded-3 mx-0">
              <div className="col-4 border-end">
                <span className="d-block fw-bold text-dark fs-5">{property.beds}</span>
                <small className="text-muted text-uppercase">Beds</small>
              </div>
              <div className="col-4 border-end">
                <span className="d-block fw-bold text-dark fs-5">{property.baths}</span>
                <small className="text-muted text-uppercase">Baths</small>
              </div>
              <div className="col-4">
                <span className="d-block fw-bold text-dark text-truncate small pt-1">{property.sqft}</span>
                <small className="text-muted text-uppercase">Area</small>
              </div>
            </div>

            <h5 className="fw-bold text-dark mt-4">Overview Description</h5>
            <p className="text-muted small lh-relaxed">{property.description}</p>

            <h5 className="fw-bold text-dark mt-4">Key Features</h5>
            <div className="d-flex flex-wrap gap-2 mt-2">
              {property.features.map((feature, index) => (
                <span key={index} className="badge bg-secondary-subtle text-dark px-3 py-2 rounded-pill border small">✓ {feature}</span>
              ))}
            </div>

            <button className="btn btn-primary w-100 py-2.5 fw-bold mt-4 shadow-sm" onClick={() => alert('Booking inspection system loaded!')}>
              Schedule a Physical Inspection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetail;