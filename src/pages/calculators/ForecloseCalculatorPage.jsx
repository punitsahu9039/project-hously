import React from 'react';
import CalculatorPageTemplate from './CalculatorPageTemplate';
import LoanCalculators from '@/components/LoanCalculators/LoanCalculators';

const ForecloseCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Loan Foreclosure Calculator"
      description="Calculate how much you can save by foreclosing your loan and the amount you need to pay to close your loan early."
      calculatorComponent={<LoanCalculators />}
    />
  );
};

export default ForecloseCalculatorPage;
