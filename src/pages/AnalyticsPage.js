import React from 'react';
import EMIChart from '../components/EMIChart';
import { calculateTotalInterest, calculateRemainingBalance } from '../utils/emiCalculator';
import './AnalyticsPage.css';

const AnalyticsPage = ({ loans }) => {
  const totalPrincipal = loans.reduce((sum, loan) => sum + loan.principal, 0);
  const totalInterest = loans.reduce((sum, loan) => {
    const interest = calculateTotalInterest(loan.emi, loan.tenure, loan.principal);
    return sum + interest;
  }, 0);
  const totalPayable = totalPrincipal + totalInterest;
  
  const totalPaid = loans.reduce((sum, loan) => {
    return sum + (loan.emi * loan.paidMonths);
  }, 0);
  
  const totalRemaining = loans.reduce((sum, loan) => {
    const remaining = calculateRemainingBalance(
      loan.principal,
      loan.annualRate,
      loan.tenure,
      loan.paidMonths
    );
    return sum + remaining;
  }, 0);

  return (
    <div className="page analytics-page">
      <div className="page-header">
        <h1>Analytics</h1>
        <p>Detailed breakdown of your loan portfolio</p>
      </div>
      
      {loans.length > 0 ? (
        <>
          <div className="analytics-summary">
            <div className="summary-card">
              <h3>Total Principal</h3>
              <p className="amount">₹{totalPrincipal.toFixed(2)}</p>
              <span className="label">Original loan amount</span>
            </div>
            <div className="summary-card">
              <h3>Total Interest</h3>
              <p className="amount interest">₹{totalInterest.toFixed(2)}</p>
              <span className="label">Interest over loan period</span>
            </div>
            <div className="summary-card">
              <h3>Total Payable</h3>
              <p className="amount total">₹{totalPayable.toFixed(2)}</p>
              <span className="label">Principal + Interest</span>
            </div>
          </div>
          
          <div className="analytics-grid">
            <EMIChart loans={loans} />
            
            <div className="payment-status">
              <h2>Payment Status</h2>
              <div className="status-card">
                <div className="status-item">
                  <span className="status-label">Amount Paid</span>
                  <span className="status-value paid">₹{totalPaid.toFixed(2)}</span>
                </div>
                <div className="status-item">
                  <span className="status-label">Amount Remaining</span>
                  <span className="status-value remaining">₹{totalRemaining.toFixed(2)}</span>
                </div>
                <div className="status-progress">
                  <div className="progress-bar-analytics">
                    <div 
                      className="progress-fill-analytics" 
                      style={{ width: `${(totalPaid / totalPayable * 100).toFixed(1)}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">
                    {((totalPaid / totalPayable) * 100).toFixed(1)}% Completed
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="loan-breakdown">
            <h2>Loan-wise Breakdown</h2>
            <div className="breakdown-table">
              <div className="table-header">
                <span>Loan Name</span>
                <span>Principal</span>
                <span>Interest</span>
                <span>Total</span>
                <span>EMI</span>
              </div>
              {loans.map(loan => {
                const interest = calculateTotalInterest(loan.emi, loan.tenure, loan.principal);
                return (
                  <div key={loan.id} className="table-row">
                    <span className="loan-name">{loan.name}</span>
                    <span>₹{loan.principal.toFixed(2)}</span>
                    <span>₹{interest.toFixed(2)}</span>
                    <span>₹{(loan.principal + interest).toFixed(2)}</span>
                    <span className="emi-cell">₹{loan.emi.toFixed(2)}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">📈</div>
          <h3>No data to analyze</h3>
          <p>Add loans to see detailed analytics and insights</p>
        </div>
      )}
    </div>
  );
};

export default AnalyticsPage;
