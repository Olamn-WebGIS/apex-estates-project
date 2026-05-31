// src/pages/Signup.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="container-fluid my-md-5 py-5 d-flex align-items-center justify-content-center px-3">
      <div className="card shadow border-0 p-4 rounded-3 w-100" style={{ maxWidth: '440px' }}>
        <h2 className="text-center fw-bold mb-3 text-dark fs-3">Create Account</h2>
        {success && <div className="alert alert-success text-center py-2 small">✅ Registration complete! Click Sign In to enter.</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label small fw-bold text-muted">Full Name</label>
            <input type="text" name="fullName" className="form-control" placeholder="John Doe" value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label small fw-bold text-muted">Email Address</label>
            <input type="email" name="email" className="form-control" placeholder="name@example.com" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label className="form-label small fw-bold text-muted">Password</label>
            <input type="password" name="password" className="form-control" placeholder="••••••••" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2 fw-bold shadow-sm">Get Started</button>
        </form>
        <p className="text-center mt-4 mb-0 small text-muted">Already have an account? <Link to="/login" className="text-primary text-decoration-none fw-semibold">Sign In</Link></p>
      </div>
    </div>
  );
}

export default Signup;