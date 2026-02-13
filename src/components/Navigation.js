import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-brand">
        <h1>💳 FinTech EMI Manager</h1>
      </div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span className="nav-icon">📊</span>
          Dashboard
        </NavLink>
        <NavLink to="/calculator" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span className="nav-icon">🧮</span>
          Calculator
        </NavLink>
        <NavLink to="/loans" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span className="nav-icon">📋</span>
          My Loans
        </NavLink>
        <NavLink to="/analytics" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <span className="nav-icon">📈</span>
          Analytics
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
