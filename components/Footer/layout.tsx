'use client';

import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <h2 className="footer-heading">Let’s Chat</h2>
        <button className="footer-button" onClick={() => window.location.href = '/ContactUs'}>Get in touch</button>
        </div>
        
        <div className="footer-content">
          <div className="footer-contact">
            <p>Reach Out@+91 0000555500</p>
            <p>hello@acroyasoftwaresolutions.com</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <a href="/#CaseStudy">Work</a>
              <a href="/Aboutus">About Us</a>
              <a href="/#Testimonial">Our Clients</a>
              <a href="/PrivacyPolicy">Privacy Policy</a>
              <a href="/RefundPolicy">Refund Policy</a>
            </div>
            
            <div className="footer-column">
              <a href="/#Services">Services</a>
              <a href="/CareerSection">Careers</a>
              <a href="/TermsOfService">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

