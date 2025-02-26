import React from "react";

const termsOfServiceStyles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    color: '#333',
    maxWidth: '800px',
    margin: '80px auto',
  },
  heading: {
    fontSize: '2em',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1em',
    lineHeight: '1.6',
  },
};

function TermsOfService() {
  return (
    <div style={termsOfServiceStyles.container}>
      <h1 style={termsOfServiceStyles.heading}>Terms and Conditions</h1>
      <p style={termsOfServiceStyles.paragraph}>
        Welcome to TOPAY FOUNDATION. These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of our website and services. By accessing or using our website, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our website.
      </p>
      <p style={termsOfServiceStyles.paragraph}>
        <strong>1. Acceptance of Terms:</strong> By using our website, you confirm that you are at least 18 years old or have the consent of a legal guardian to use our services. You agree to use the website in accordance with all applicable laws and regulations.
      </p>
      <p style={termsOfServiceStyles.paragraph}>
        <strong>2. Intellectual Property Rights:</strong> All content on this website, including but not limited to text, graphics, logos, and software, is the property of TOPAY FOUNDATION and protected under applicable copyright and trademark laws. Unauthorized use of any content is strictly prohibited.
      </p>
      <p style={termsOfServiceStyles.paragraph}>
        <strong>3. User Accounts:</strong> If you create an account on our website, you are responsible for maintaining the security of your account credentials. You agree to notify us immediately of any unauthorized access or security breach related to your account.
      </p>
      <div style={termsOfServiceStyles.paragraph}>
        <strong>4. Prohibited Activities:</strong>
        <ul>
          <li>Violates any applicable law or regulation.</li>
          <li>Infringes on the rights of others, including intellectual property rights.</li>
          <li>Introduces harmful code, such as viruses or malware.</li>
          <li>Attempts to gain unauthorized access to our systems or services.</li>
          <li>Engages in or promotes activities related to terrorism, money laundering, or other illicit activities.</li>
        </ul>
      </div>
      <div style={termsOfServiceStyles.paragraph}>
        <strong>5. Compliance with Blockchain Regulations:</strong>
        <ul>
          <li>GDPR (General Data Protection Regulation)</li>
          <li>AML (Anti-Money Laundering) Laws</li>
          <li>KYC (Know Your Customer)</li>
          <li>SEC Compliance</li>
          <li>Data Localization Laws</li>
          <li>FATF Guidelines</li>
          <li>ePrivacy Directive</li>
          <li>ISO/IEC 27001</li>
        </ul>
      </div>
      <div style={termsOfServiceStyles.paragraph}>
        <strong>6. Responsibilities Regarding Data and Assets:</strong>
        <ul>
          <li>We ensure the secure storage of user data in compliance with applicable laws and industry standards.</li>
          <li>Users are responsible for safeguarding their private keys and wallet credentials. TOPAY FOUNDATION cannot recover lost keys or funds.</li>
          <li>We maintain comprehensive asset management policies to prevent unauthorized access, loss, or misuse of funds.</li>
          <li>All transactions on our platform are final and irreversible to ensure the integrity of the blockchain.</li>
          <li>Any detected activities related to terrorism or similar illicit conduct will be reported to the appropriate law enforcement agencies in compliance with international regulations.</li>
        </ul>
      </div>
      <div style={termsOfServiceStyles.paragraph}>
        <strong>7. Asset and Financial Compliance Laws:</strong>
        <ul>
          <li>Custodial Asset Standards</li>
          <li>Basel III</li>
          <li>MiCA (Markets in Crypto-Assets)</li>
          <li>Consumer Protection Laws</li>
        </ul>
      </div>
      <p style={termsOfServiceStyles.paragraph}>
        <strong>8. Limitation of Liability:</strong> TOPAY FOUNDATION is not liable for any direct, indirect, incidental, or consequential damages arising from your use of our website or inability to access our services. Use of our website is at your own risk.
      </p>
      <p style={termsOfServiceStyles.paragraph}>
        <strong>9. Privacy Policy:</strong> Your use of our website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. Please review the Privacy Policy carefully.
      </p>
      <p style={termsOfServiceStyles.paragraph}>
        <strong>10. Modifications to Terms:</strong> TOPAY FOUNDATION reserves the right to update these Terms at any time without prior notice. Changes will be effective immediately upon posting on this page. It is your responsibility to review these Terms regularly.
      </p>
      <p style={termsOfServiceStyles.paragraph}>
        <strong>11. Governing Law:</strong> These Terms are governed by and construed in accordance with the laws of Global Company. Any disputes arising from these Terms will be resolved exclusively in the courts of Global Company.
      </p>
      <p style={termsOfServiceStyles.paragraph}>
        <strong>12. Termination:</strong> We reserve the right to terminate or suspend access to our website or services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to others.
      </p>
      <div style={termsOfServiceStyles.paragraph}>
        <strong>13. Blockchain-Specific Risks:</strong>
        <ul>
          <li>Volatility in cryptocurrency values.</li>
          <li>Regulatory changes that may impact services.</li>
          <li>Security risks, including potential breaches or hacks.</li>
          <li>Irreversible nature of blockchain transactions.</li>
        </ul>
      </div>
      <div style={termsOfServiceStyles.paragraph}>
        <strong>14. International Compliance:</strong>
        <ul>
          <li>UN Model Law on Electronic Commerce</li>
          <li>OECD Guidelines</li>
          <li>WIPO Copyright Treaty</li>
          <li>UNCITRAL Model Law</li>
        </ul>
      </div>
      <p style={termsOfServiceStyles.paragraph}>
        <strong>15. Contact Us:</strong> For questions or concerns regarding these Terms, please contact us at <a href="mailto:contact@topayfoundation.com">contact@topayfoundation.com</a>
      </p>
    </div>
  );
}

export default TermsOfService;
