import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

const HomeLoanPage = () => {
  return (
    <ServicePageTemplate
      title="Home Loan"
      description="Make your dream home a reality with our flexible home loan options with interest rates starting from 8.5%* p.a."
      image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
      features={[
        "Loan amount up to ₹10 Crore",
        "Interest rates starting from 8.5%* p.a.",
        "Tenure up to 30 years",
        "Quick processing and disbursement",
        "Minimal documentation",
        "No hidden charges"
      ]}
      eligibility={[
        "Salaried individuals with minimum 2 years of work experience",
        "Self-employed professionals with 3 years of practice",
        "Business owners with 3 years of business stability",
        "Age between 21 to 65 years at loan maturity",
        "Minimum monthly income of ₹25,000"
      ]}
      documents={[
        "Identity Proof (Aadhaar, PAN, Passport, Voter ID)",
        "Address Proof (Aadhaar, Passport, Utility Bills)",
        "Income Proof (Salary Slips, Form 16, ITR)",
        "Property Documents (Sale Deed, Title Deed)",
        "Bank Statements for the last 6 months",
        "Photographs (Passport Size)"
      ]}
    />
  );
};

export default HomeLoanPage;
