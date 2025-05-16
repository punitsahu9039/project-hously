import React from 'react';
import Layout from '@/components/Layout';
// import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  return (
    <Layout>
      <div className="bg-primary text-white py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 font-weight-bold">About Hously Finserv</h1>
            <p className="lead">Your trusted financial partner for innovative loan solutions.</p>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6">
              <h2 className="h3 font-weight-bold mb-4">Our Story</h2>
              <p>
                Founded in 2015, Hously Finserv began with a simple mission: to make the loan process simpler, faster, and more transparent for everyone.
              </p>
              <p>
                We started as a small team of financial experts in Pune and quickly grew to become one of the most trusted loan service providers in India.
              </p>
              <p>
                Today, we help thousands of customers every month achieve their financial goals through our innovative loan products and personalized service.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="bg-light rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Team Meeting"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="text-center mb-5">
            <h2 className="h3 font-weight-bold">Our Values</h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card text-center shadow-sm">
                  <div className="card-body">
                    <div className="mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="h5 font-weight-bold">Trust & Transparency</h3>
                    <p>
                      We believe in building long-term relationships based on trust, honesty, and complete transparency in all our dealings.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card text-center shadow-sm">
                  <div className="card-body">
                    <div className="mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="h5 font-weight-bold">Innovation</h3>
                    <p>
                      We constantly innovate to provide the best financial solutions and digital experience for our customers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card text-center shadow-sm">
                  <div className="card-body">
                    <div className="mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                    </div>
                    <h3 className="h5 font-weight-bold">Customer-Centric</h3>
                    <p>
                      Our customers are at the heart of everything we do, and we strive to exceed their expectations at every step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light p-5 rounded-lg">
            <h2 className="h3 font-weight-bold text-center mb-4">Our Leadership</h2>
            <div className="row">
              <div className="col-md-4 mb-4 text-center">
                <div className="rounded-circle overflow-hidden mb-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="CEO"
                    className="img-fluid"
                  />
                </div>
                <h4 className="h5 font-weight-bold">Rahul Sharma</h4>
                <p className="text-muted">CEO & Founder</p>
              </div>
              <div className="col-md-4 mb-4 text-center">
                <div className="rounded-circle overflow-hidden mb-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="COO"
                    className="img-fluid"
                  />
                </div>
                <h4 className="h5 font-weight-bold">Priya Kapoor</h4>
                <p className="text-muted">COO</p>
              </div>
              <div className="col-md-4 mb-4 text-center">
                <div className="rounded-circle overflow-hidden mb-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/66.jpg"
                    alt="CTO"
                    className="img-fluid"
                  />
                </div>
                <h4 className="h5 font-weight-bold">Vikram Mehta</h4>
                <p className="text-muted">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
