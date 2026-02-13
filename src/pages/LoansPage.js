import React from 'react';
import { useNavigate } from 'react-router-dom';
import EMIList from '../components/EMIList';
import './LoansPage.css';

const LoansPage = ({ loans, onDeleteLoan }) => {
  const navigate = useNavigate();

  return (
    <div className="page loans-page">
      <div className="page-header">
        <div>
          <h1>My Loans</h1>
          <p>Manage and track all your active loans</p>
        </div>
        <button className="btn-add-loan" onClick={() => navigate('/calculator')}>
          + Add New Loan
        </button>
      </div>
      
      <EMIList loans={loans} onDeleteLoan={onDeleteLoan} />
    </div>
  );
};

export default LoansPage;
