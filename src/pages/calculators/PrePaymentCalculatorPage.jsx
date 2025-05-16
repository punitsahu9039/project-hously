import React from 'react';
import CalculatorPageTemplate from './CalculatorPageTemplate';
import LoanCalculators from '@/components/LoanCalculators/LoanCalculators';

const PrePaymentCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Pre-Payment Calculator"
      description="Calculate the impact of making a pre-payment on your loan tenure and interest savings."
      calculatorComponent={<LoanCalculators />}
    />
  );
};

export default PrePaymentCalculatorPage;
