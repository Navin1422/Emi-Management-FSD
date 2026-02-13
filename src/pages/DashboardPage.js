import React from 'react';
import EMIDashboard from '../components/EMIDashboard';
import './DashboardPage.css';

const DashboardPage = ({ loans }) => {
  const recentLoans = loans.slice(-3).reverse();

  return (
    <div className="page dashboard-page">
      <div className="page-header">
        <h1>Dashboard Overview</h1>
        <p>Track your EMI payments and loan status at a glance</p>
      </div>
      
      <EMIDashboard loans={loans} />
      
      {recentLoans.length > 0 && (
        <div className="recent-loans">
          <h2>Recent Loans</h2>
          <div className="recent-loans-list">
            {recentLoans.map(loan => (
              <div key={loan.id} className="recent-loan-item">
                <div className="loan-info">
                  <h3>{loan.name}</h3>
                  <p>₹{loan.principal.toFixed(2)} @ {loan.annualRate}%</p>
                </div>
                <div className="loan-emi-info">
                  <span className="emi-label">Monthly EMI</span>
                  <span className="emi-amount">₹{loan.emi.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {loans.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">📊</div>
          <h3>No loans yet</h3>
          <p>Start by adding your first loan using the calculator</p>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
