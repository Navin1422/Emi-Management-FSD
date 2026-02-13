import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import DashboardPage from './pages/DashboardPage';
import CalculatorPage from './pages/CalculatorPage';
import LoansPage from './pages/LoansPage';
import AnalyticsPage from './pages/AnalyticsPage';
import './App.css';

function App() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const savedLoans = localStorage.getItem('emiLoans');
    if (savedLoans) {
      setLoans(JSON.parse(savedLoans));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('emiLoans', JSON.stringify(loans));
  }, [loans]);

  const handleAddLoan = (loan) => {
    setLoans(prev => [...prev, loan]);
  };

  const handleDeleteLoan = (id) => {
    setLoans(prev => prev.filter(loan => loan.id !== id));
  };

  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<DashboardPage loans={loans} />} />
          <Route path="/calculator" element={<CalculatorPage onAddLoan={handleAddLoan} />} />
          <Route path="/loans" element={<LoansPage loans={loans} onDeleteLoan={handleDeleteLoan} />} />
          <Route path="/analytics" element={<AnalyticsPage loans={loans} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
