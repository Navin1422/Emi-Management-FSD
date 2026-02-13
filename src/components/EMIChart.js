import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { calculateTotalInterest } from '../utils/emiCalculator';
import './EMIChart.css';

const EMIChart = ({ loans }) => {
  if (loans.length === 0) {
    return null;
  }

  const totalPrincipal = loans.reduce((sum, loan) => sum + loan.principal, 0);
  const totalInterest = loans.reduce((sum, loan) => {
    const interest = calculateTotalInterest(loan.emi, loan.tenure, loan.principal);
    return sum + interest;
  }, 0);

  const data = [
    { name: 'Principal', value: totalPrincipal },
    { name: 'Interest', value: totalInterest }
  ];

  const COLORS = ['#6366f1', '#f59e0b'];

  return (
    <div className="emi-chart">
      <h2>Principal vs Interest Breakdown</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `₹${value.toFixed(2)}`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        <div className="chart-summary">
          <div className="summary-item">
            <div className="summary-color" style={{ background: COLORS[0] }}></div>
            <div className="summary-content">
              <span className="summary-label">Total Principal</span>
              <span className="summary-value">₹{totalPrincipal.toFixed(2)}</span>
            </div>
          </div>
          <div className="summary-item">
            <div className="summary-color" style={{ background: COLORS[1] }}></div>
            <div className="summary-content">
              <span className="summary-label">Total Interest</span>
              <span className="summary-value">₹{totalInterest.toFixed(2)}</span>
            </div>
          </div>
          <div className="summary-item total">
            <div className="summary-content">
              <span className="summary-label">Total Payable</span>
              <span className="summary-value">₹{(totalPrincipal + totalInterest).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMIChart;
