// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "admin@estate.com" && formData.password === "password123") {
      setMessage("✅ Login successful! Dashboard routing loaded.");
    } else {
      setMessage("❌ Invalid. (Try: admin@estate.com / password123)");
    }
  };

  return (
    <div className="container-fluid my-md-5 py-5 d-flex align-items-center justify-content-center px-3">
      <div className="card shadow border-0 p-4 rounded-3 w-100" style={{ maxWidth: '440px' }}>
        <h2 className="text-center fw-bold mb-3 text-dark fs-3">Welcome Back</h2>
        {message && <div className={`alert text-center py-2 small ${message.includes('✅') ? 'alert-success' : 'alert-danger'}`}>{message}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label small fw-bold text-muted">Email Address</label>
            <input type="email" name="email" className="form-control" placeholder="name@example.com" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label className="form-label small fw-bold text-muted">Password</label>
            <input type="password" name="password" className="form-control" placeholder="••••••••" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2 fw-bold shadow-sm">Sign In</button>
        </form>
        <p className="text-center mt-4 mb-0 small text-muted">Don't have an account? <Link to="/signup" className="text-primary text-decoration-none fw-semibold">Sign up</Link></p>
      </div>
    </div>
  );
}

export default Login;