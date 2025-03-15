import React from "react";

interface TermsOfServiceStyles {
  container: React.CSSProperties;
  heading: React.CSSProperties;
  section: React.CSSProperties;
  sectionHeading: React.CSSProperties;
  paragraph: React.CSSProperties;
  list: React.CSSProperties;
  listItem: React.CSSProperties;
  footer: React.CSSProperties;
}

const termsOfServiceStyles: TermsOfServiceStyles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    color: '#333',
    maxWidth: '800px',
    margin: '80px auto',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6'
  },
  heading: {
    color: '#0D7CE9',
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '28px'
  },
  section: {
    marginBottom: '20px'
  },
  sectionHeading: {
    color: '#0D7CE9',
    fontSize: '20px',
    marginBottom: '10px'
  },
  paragraph: {
    marginBottom: '15px'
  },
  list: {
    paddingLeft: '20px',
    marginBottom: '15px'
  },
  listItem: {
    marginBottom: '8px'
  },
  footer: {
    marginTop: '30px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#666'
  }
};

const TermsOfService: React.FC = () => {
  return (
    <div style={termsOfServiceStyles.container}>
      <h1 style={termsOfServiceStyles.heading}>Terms of Service</h1>
      
      <div style={termsOfServiceStyles.section}>
        <h2 style={termsOfServiceStyles.sectionHeading}>1. Acceptance of Terms</h2>
        <p style={termsOfServiceStyles.paragraph}>
          By accessing or using the TOPAY FOUNDATION platform, website, or any of our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
        </p>
      </div>
      
      <div style={termsOfServiceStyles.section}>
        <h2 style={termsOfServiceStyles.sectionHeading}>2. Description of Services</h2>
        <p style={termsOfServiceStyles.paragraph}>
          TOPAY FOUNDATION provides a blockchain-based platform focused on Riba-free financial solutions. Our services include but are not limited to blockchain development, smart contract auditing, and educational resources on Shariah-compliant blockchain solutions.
        </p>
      </div>
      
      <div style={termsOfServiceStyles.section}>
        <h2 style={termsOfServiceStyles.sectionHeading}>3. User Responsibilities</h2>
        <p style={termsOfServiceStyles.paragraph}>
          Users of our platform are responsible for:
        </p>
        <ul style={termsOfServiceStyles.list}>
          <li style={termsOfServiceStyles.listItem}>Maintaining the security of their accounts and private keys</li>
          <li style={termsOfServiceStyles.listItem}>Ensuring all information provided is accurate and up-to-date</li>
          <li style={termsOfServiceStyles.listItem}>Complying with all applicable laws and regulations</li>
          <li style={termsOfServiceStyles.listItem}>Using our services in an ethical and responsible manner</li>
        </ul>
      </div>
      
      <div style={termsOfServiceStyles.section}>
        <h2 style={termsOfServiceStyles.sectionHeading}>4. Intellectual Property</h2>
        <p style={termsOfServiceStyles.paragraph}>
          All content, features, and functionality of our platform, including but not limited to text, graphics, logos, and software, are owned by TOPAY FOUNDATION and are protected by international copyright, trademark, and other intellectual property laws.
        </p>
      </div>
      
      <div style={termsOfServiceStyles.section}>
        <h2 style={termsOfServiceStyles.sectionHeading}>5. Limitation of Liability</h2>
        <p style={termsOfServiceStyles.paragraph}>
          TOPAY FOUNDATION shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, our services. This includes any losses, damages, or claims arising from:
        </p>
        <ul style={termsOfServiceStyles.list}>
          <li style={termsOfServiceStyles.listItem}>Errors, mistakes, or inaccuracies in content</li>
          <li style={termsOfServiceStyles.listItem}>Personal injury or property damage resulting from your access to or use of our services</li>
          <li style={termsOfServiceStyles.listItem}>Unauthorized access to or use of our servers or personal information</li>
          <li style={termsOfServiceStyles.listItem}>Interruption or cessation of transmission to or from our services</li>
        </ul>
      </div>
      
      <div style={termsOfServiceStyles.section}>
        <h2 style={termsOfServiceStyles.sectionHeading}>6. Governing Law</h2>
        <p style={termsOfServiceStyles.paragraph}>
          These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which TOPAY FOUNDATION operates, without regard to its conflict of law provisions.
        </p>
      </div>
      
      <div style={termsOfServiceStyles.section}>
        <h2 style={termsOfServiceStyles.sectionHeading}>7. Changes to Terms</h2>
        <p style={termsOfServiceStyles.paragraph}>
          We reserve the right to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically for changes. Your continued use of our platform following the posting of any changes constitutes acceptance of those changes.
        </p>
      </div>
      
      <div style={termsOfServiceStyles.section}>
        <h2 style={termsOfServiceStyles.sectionHeading}>8. Contact Information</h2>
        <p style={termsOfServiceStyles.paragraph}>
          If you have any questions about these Terms, please contact us at legal@topayfoundation.com.
        </p>
      </div>
      
      <div style={termsOfServiceStyles.footer}>
        <p>Last updated: November 1, 2023</p>
      </div>
    </div>
  );
};

export default TermsOfService;