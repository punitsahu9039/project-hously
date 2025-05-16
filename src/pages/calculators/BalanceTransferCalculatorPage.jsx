import React from 'react';
import CalculatorPageTemplate from './CalculatorPageTemplate';
import LoanCalculators from '@/components/LoanCalculators/LoanCalculators';

const BalanceTransferCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Balance Transfer Calculator"
      description="Find out how much you can save by transferring your existing loan to Hously Finserv with our lower interest rates."
      calculatorComponent={<LoanCalculators />}
    />
  );
};

export default BalanceTransferCalculatorPage;
