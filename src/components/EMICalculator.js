import React, { useState } from 'react';
import { calculateEMI, calculateTotalInterest } from '../utils/emiCalculator';
import './EMICalculator.css';

const EMICalculator = ({ onAddLoan }) => {
  const [formData, setFormData] = useState({
    loanName: '',
    principal: '',
    annualRate: '',
    tenure: ''
  });
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCalculate = () => {
    const { principal, annualRate, tenure } = formData;
    const p = parseFloat(principal);
    const r = parseFloat(annualRate);
    const t = parseInt(tenure);

    if (p > 0 && r > 0 && t > 0) {
      const calculatedEMI = calculateEMI(p, r, t);
      const interest = calculateTotalInterest(calculatedEMI, t, p);
      setEmi(calculatedEMI);
      setTotalInterest(interest);
    }
  };

  const handleAddLoan = () => {
    if (formData.loanName && emi > 0) {
      onAddLoan({
        id: Date.now(),
        name: formData.loanName,
        principal: parseFloat(formData.principal),
        annualRate: parseFloat(formData.annualRate),
        tenure: parseInt(formData.tenure),
        emi: emi,
        paidMonths: 0,
        startDate: new Date().toISOString()
      });
      setFormData({ loanName: '', principal: '', annualRate: '', tenure: '' });
      setEmi(0);
      setTotalInterest(0);
    }
  };

  return (
    <div className="emi-calculator">
      <h2>EMI Calculator</h2>
      <div className="form-group">
        <label>Loan Name</label>
        <input
          type="text"
          name="loanName"
          value={formData.loanName}
          onChange={handleChange}
          placeholder="e.g., Home Loan"
        />
      </div>
      <div className="form-group">
        <label>Principal Amount (₹)</label>
        <input
          type="number"
          name="principal"
          value={formData.principal}
          onChange={handleChange}
          placeholder="e.g., 500000"
        />
      </div>
      <div className="form-group">
        <label>Annual Interest Rate (%)</label>
        <input
          type="number"
          name="annualRate"
          value={formData.annualRate}
          onChange={handleChange}
          placeholder="e.g., 8.5"
          step="0.1"
        />
      </div>
      <div className="form-group">
        <label>Loan Tenure (Months)</label>
        <input
          type="number"
          name="tenure"
          value={formData.tenure}
          onChange={handleChange}
          placeholder="e.g., 60"
        />
      </div>
      <button className="btn-calculate" onClick={handleCalculate}>Calculate EMI</button>
      
      {emi > 0 && (
        <div className="emi-result">
          <div className="result-card">
            <h3>Monthly EMI</h3>
            <p className="emi-amount">₹{emi.toFixed(2)}</p>
          </div>
          <div className="result-details">
            <div className="detail-item">
              <span>Total Interest:</span>
              <span>₹{totalInterest.toFixed(2)}</span>
            </div>
            <div className="detail-item">
              <span>Total Amount:</span>
              <span>₹{(parseFloat(formData.principal) + totalInterest).toFixed(2)}</span>
            </div>
          </div>
          <button className="btn-add" onClick={handleAddLoan}>Add to Dashboard</button>
        </div>
      )}
    </div>
  );
};

export default EMICalculator;
