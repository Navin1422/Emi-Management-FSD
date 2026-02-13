import React from 'react';
import { useNavigate } from 'react-router-dom';
import EMICalculator from '../components/EMICalculator';
import './CalculatorPage.css';

const CalculatorPage = ({ onAddLoan }) => {
  const navigate = useNavigate();

  const handleAddLoan = (loan) => {
    onAddLoan(loan);
    navigate('/loans');
  };

  return (
    <div className="page calculator-page">
      <div className="page-header">
        <h1>EMI Calculator</h1>
        <p>Calculate your monthly EMI and add loans to track</p>
      </div>
      
      <div className="calculator-container">
        <EMICalculator onAddLoan={handleAddLoan} />
        
        <div className="calculator-info">
          <h2>How EMI is Calculated</h2>
          <div className="info-card">
            <h3>Reducing Balance Method</h3>
            <p>We use the reducing balance formula to calculate your EMI:</p>
            <div className="formula">
              <code>EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)</code>
            </div>
            <div className="formula-legend">
              <div className="legend-item">
                <strong>P</strong> = Principal loan amount
              </div>
              <div className="legend-item">
                <strong>r</strong> = Monthly interest rate (Annual Rate / 12 / 100)
              </div>
              <div className="legend-item">
                <strong>n</strong> = Loan tenure in months
              </div>
            </div>
          </div>
          
          <div className="info-card">
            <h3>Tips for Better EMI Management</h3>
            <ul>
              <li>Keep your EMI to income ratio below 40%</li>
              <li>Compare interest rates from multiple lenders</li>
              <li>Consider prepayment to reduce interest burden</li>
              <li>Maintain a good credit score for better rates</li>
              <li>Choose tenure wisely - longer tenure means more interest</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
