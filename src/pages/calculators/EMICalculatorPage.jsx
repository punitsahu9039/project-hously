import React from 'react';
import CalculatorPageTemplate from './CalculatorPageTemplate';
import LoanCalculators from '@/components/LoanCalculators/LoanCalculators';

const EMICalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="EMI Calculator"
      description="Calculate your monthly EMI, total interest payable, and total payment for your loan with our easy-to-use EMI calculator."
      calculatorComponent={<LoanCalculators />}
    />
  );
};

export default EMICalculatorPage;
