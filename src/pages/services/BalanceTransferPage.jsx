import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

const BalanceTransferPage = () => {
  return (
    <ServicePageTemplate
      title="Balance Transfer"
      description="Transfer your existing loan to Hously Finserv and enjoy lower interest rates and better terms, saving up to ₹8 Lakhs* on your total interest payment."
      image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      features={[
        "Lower interest rates than your current loan",
        "Save up to ₹8 Lakhs* on your total interest payment",
        "Option to top-up your loan for additional funds",
        "Simplified documentation process",
        "No foreclosure charges after 6 months",
        "Zero hidden charges"
      ]}
      eligibility={[
        "Existing loan with any bank or financial institution",
        "Consistent repayment track record",
        "Minimum 12 EMIs paid for the existing loan",
        "Age between 21 to 65 years at loan maturity",
        "Property with clear title documents (for secured loans)"
      ]}
      documents={[
        "Identity Proof (Aadhaar, PAN, Passport, Voter ID)",
        "Address Proof (Aadhaar, Passport, Utility Bills)",
        "Income Proof (Salary Slips, Form 16, ITR)",
        "Existing Loan Account Statement",
        "Foreclosure Letter from current lender",
        "Original Property Documents (for secured loans)"
      ]}
    />
  );
};

export default BalanceTransferPage;
