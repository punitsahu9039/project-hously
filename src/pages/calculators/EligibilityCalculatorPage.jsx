import React from 'react';
import CalculatorPageTemplate from './CalculatorPageTemplate';
import LoanCalculators from '@/components/LoanCalculators/LoanCalculators';

const EligibilityCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Loan Eligibility Calculator"
      description="Estimate how much loan you are eligible for based on your income, existing EMIs, and loan preferences."
      calculatorComponent={<LoanCalculators />}
    />
  );
};

export default EligibilityCalculatorPage;
