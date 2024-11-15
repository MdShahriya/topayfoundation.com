import React from 'react';

const termsOfServiceStyles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    color: '#333',
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2em',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1em',
    lineHeight: '1.6',
  }
};

function TermsOfService() {
  return (
    <div style={termsOfServiceStyles.container}>
      <h1 style={termsOfServiceStyles.heading}>Terms of Service</h1>
      <p style={termsOfServiceStyles.paragraph}>
        Welcome to TOP FOUNDATION. These Terms of Service ("Terms") govern your use of our website. By accessing or using our website, you agree to be bound by these Terms.
      </p>
      <p style={termsOfServiceStyles.paragraph}>
        <strong>1. Use of Our Services:</strong> You agree to use our website only for lawful purposes and in a manner that does not infringe on the rights of others.
      </p>
      <p style={termsOfServiceStyles.paragraph}>
        <strong>2. Intellectual Property:</strong> All content on our website, including text, graphics, and logos, is the property of TOP FOUNDATION and is protected by intellectual property laws.
      </p>
      <p style={termsOfServiceStyles.paragraph}>
        <strong>3. User Responsibilities:</strong> You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
      </p>
      <p style={termsOfServiceStyles.paragraph}>
        <strong>4. Limitation of Liability:</strong> TOP FOUNDATION will not be liable for any indirect, incidental, or consequential damages arising out of your use of our website.
      </p>
      <p style={termsOfServiceStyles.paragraph}>
        <strong>5. Changes to Terms:</strong> We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on our website.
      </p>
      <p style={termsOfServiceStyles.paragraph}>
        <strong>6. Contact Us:</strong> If you have any questions about these Terms, please contact us at contact@topayfoundation.com.
      </p>
    </div>
  );
}

export default TermsOfService;
