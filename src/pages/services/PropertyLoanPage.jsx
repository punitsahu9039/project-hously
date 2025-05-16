import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

const PropertyLoanPage = () => {
  return (
    <ServicePageTemplate
      title="Property Loan"
      description="Leverage your property to get loans for renovations, education, marriage, or other financial needs with competitive interest rates."
      image="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80"
      features={[
        "Loan against residential or commercial property",
        "Loan amount up to 70% of property value",
        "Lower interest rates compared to personal loans",
        "Flexible repayment options up to 15 years",
        "Overdraft facility available",
        "Tax benefits as applicable"
      ]}
      eligibility={[
        "Property owners with clear title documents",
        "Age between 25 to 65 years at loan maturity",
        "Salaried individuals with minimum 2 years of work experience",
        "Self-employed professionals with 3 years of practice",
        "Property should be free from encumbrances"
      ]}
      documents={[
        "Identity Proof (Aadhaar, PAN, Passport, Voter ID)",
        "Address Proof (Aadhaar, Passport, Utility Bills)",
        "Income Proof (Salary Slips, Form 16, ITR)",
        "Property Documents (Registry, Chain of Documents)",
        "Bank Statements for the last 6 months",
        "Recent Property Valuation Report"
      ]}
    />
  );
};

export default PropertyLoanPage;
