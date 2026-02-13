import React from 'react';
import { calculateRemainingBalance } from '../utils/emiCalculator';
import './EMIDashboard.css';

const EMIDashboard = ({ loans }) => {
  const totalMonthlyEMI = loans.reduce((sum, loan) => sum + loan.emi, 0);
  const totalOutstanding = loans.reduce((sum, loan) => {
    const remaining = calculateRemainingBalance(
      loan.principal,
      loan.annualRate,
      loan.tenure,
      loan.paidMonths
    );
    return sum + remaining;
  }, 0);
  const activeLoans = loans.length;

  return (
    <div className="emi-dashboard">
      <h2>Dashboard Overview</h2>
      <div className="dashboard-cards">
        <div className="dashboard-card card-primary">
          <div className="card-icon">💰</div>
          <div className="card-content">
            <p className="card-label">Total Monthly EMI</p>
            <h3 className="card-value">₹{totalMonthlyEMI.toFixed(2)}</h3>
          </div>
        </div>
        <div className="dashboard-card card-warning">
          <div className="card-icon">📊</div>
          <div className="card-content">
            <p className="card-label">Total Outstanding</p>
            <h3 className="card-value">₹{totalOutstanding.toFixed(2)}</h3>
          </div>
        </div>
        <div className="dashboard-card card-success">
          <div className="card-icon">📋</div>
          <div className="card-content">
            <p className="card-label">Active Loans</p>
            <h3 className="card-value">{activeLoans}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMIDashboard;
