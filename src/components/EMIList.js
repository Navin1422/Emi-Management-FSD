import React from 'react';
import { calculateRemainingBalance, calculateTotalInterest } from '../utils/emiCalculator';
import './EMIList.css';

const EMIList = ({ loans, onDeleteLoan }) => {
  if (loans.length === 0) {
    return (
      <div className="emi-list-empty">
        <p>No loans added yet. Use the calculator to add your first loan.</p>
      </div>
    );
  }

  return (
    <div className="emi-list">
      <h2>Your Loans</h2>
      <div className="loan-cards">
        {loans.map(loan => {
          const remainingBalance = calculateRemainingBalance(
            loan.principal,
            loan.annualRate,
            loan.tenure,
            loan.paidMonths
          );
          const totalInterest = calculateTotalInterest(loan.emi, loan.tenure, loan.principal);
          const progress = (loan.paidMonths / loan.tenure) * 100;

          return (
            <div key={loan.id} className="loan-card">
              <div className="loan-header">
                <h3>{loan.name}</h3>
                <button className="btn-delete" onClick={() => onDeleteLoan(loan.id)}>
                  ✕
                </button>
              </div>
              <div className="loan-emi">
                <span className="emi-label">Monthly EMI</span>
                <span className="emi-value">₹{loan.emi.toFixed(2)}</span>
              </div>
              <div className="loan-details">
                <div className="detail-row">
                  <span>Principal:</span>
                  <span>₹{loan.principal.toFixed(2)}</span>
                </div>
                <div className="detail-row">
                  <span>Interest Rate:</span>
                  <span>{loan.annualRate}% p.a.</span>
                </div>
                <div className="detail-row">
                  <span>Tenure:</span>
                  <span>{loan.tenure} months</span>
                </div>
                <div className="detail-row">
                  <span>Remaining Balance:</span>
                  <span className="highlight">₹{remainingBalance.toFixed(2)}</span>
                </div>
                <div className="detail-row">
                  <span>Total Interest:</span>
                  <span>₹{totalInterest.toFixed(2)}</span>
                </div>
              </div>
              <div className="loan-progress">
                <div className="progress-info">
                  <span>Progress</span>
                  <span>{loan.paidMonths}/{loan.tenure} months</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EMIList;
