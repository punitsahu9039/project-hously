import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

const BusinessLoanPage = () => {
  return (
    <ServicePageTemplate
      title="Business Loan"
      description="Grow your business with our collateral-free business loans with competitive interest rates and flexible repayment options."
      image="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
      features={[
        "Loan amount up to ₹50 Lakhs",
        "No collateral required",
        "Approval within 24 hours",
        "Tenure up to 5 years",
        "Minimal documentation",
        "Flexible repayment options"
      ]}
      eligibility={[
        "Business vintage of minimum 2 years",
        "Annual turnover of minimum ₹10 Lakhs",
        "Age between 25 to 65 years",
        "Stable business profits for last 2 years",
        "Good credit score (700+)"
      ]}
      documents={[
        "Identity Proof (Aadhaar, PAN, Passport, Voter ID)",
        "Address Proof (Aadhaar, Passport, Utility Bills)",
        "Business Proof (GST Registration, Shop Act License)",
        "Business Financials (P&L, Balance Sheet for 2 years)",
        "Bank Statements for the last 6 months",
        "ITR for the last 2 years"
      ]}
    />
  );
};

export default BusinessLoanPage;
