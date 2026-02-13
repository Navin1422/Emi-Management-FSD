// EMI Calculation using reducing balance formula
export const calculateEMI = (principal, annualRate, tenureMonths) => {
  const monthlyRate = annualRate / 12 / 100;
  const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths) / 
              (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  return isNaN(emi) ? 0 : emi;
};

export const calculateTotalInterest = (emi, tenureMonths, principal) => {
  return (emi * tenureMonths) - principal;
};

export const calculateRemainingBalance = (principal, annualRate, tenureMonths, paidMonths) => {
  const monthlyRate = annualRate / 12 / 100;
  const emi = calculateEMI(principal, annualRate, tenureMonths);
  const remainingBalance = principal * Math.pow(1 + monthlyRate, paidMonths) - 
                          emi * ((Math.pow(1 + monthlyRate, paidMonths) - 1) / monthlyRate);
  return Math.max(0, remainingBalance);
};
