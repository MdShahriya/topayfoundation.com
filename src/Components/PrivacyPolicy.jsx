import React from 'react';

const privacyPolicyStyles = {
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
    marginBottom: '15px',
  },
  strong: {
    fontWeight: 'bold',
  },
};

function PrivacyPolicy() {
  return (
    <div style={privacyPolicyStyles.container}>
      <h1 style={privacyPolicyStyles.heading}>Privacy Policy</h1>
      <p style={privacyPolicyStyles.paragraph}>
        At TOP FOUNDATION, we embrace a fully decentralized approach to data privacy. This Privacy Policy outlines how we handle information within our decentralized ecosystem. As a Web3 entity, we do not control or store personal data centrally. Instead, we focus on transparency and user empowerment. Please review this policy to understand how we operate within the decentralized framework.
      </p>
      <p style={privacyPolicyStyles.paragraph}>
        <span style={privacyPolicyStyles.strong}>1. Information Collection:</span> In our decentralized ecosystem, data collection practices are inherently different from traditional models. We do not collect or store personal data centrally. Instead:
        <ul>
          <li><strong>Decentralized Data:</strong> User interactions are managed on decentralized networks, and data, such as wallet addresses and transaction details, is recorded on the blockchain or distributed ledger technology.</li>
          <li><strong>Metadata:</strong> We may gather non-personal metadata, such as network performance and transaction statistics, to improve the user experience.</li>
        </ul>
      </p>
      <p style={privacyPolicyStyles.paragraph}>
        <span style={privacyPolicyStyles.strong}>2. Use of Information:</span> Any data collected through decentralized means is used for:
        <ul>
          <li>Enhancing and optimizing the performance of our decentralized applications (dApps).</li>
          <li>Facilitating secure and transparent transactions and interactions.</li>
          <li>Providing users with relevant updates and improvements directly through decentralized channels.</li>
        </ul>
      </p>
      <p style={privacyPolicyStyles.paragraph}>
        <span style={privacyPolicyStyles.strong}>3. Disclosure of Information:</span> In a fully decentralized model, we do not have the capability to disclose personal data centrally. Information on decentralized networks is public and immutable:
        <ul>
          <li><strong>Public Records:</strong> Data recorded on the blockchain or distributed ledger is accessible by all participants within the network.</li>
          <li><strong>No Centralized Disclosure:</strong> We do not have the capacity to disclose information beyond the decentralized network’s protocols.</li>
        </ul>
      </p>
      <p style={privacyPolicyStyles.paragraph}>
        <span style={privacyPolicyStyles.strong}>4. Security:</span> We leverage decentralized technologies to enhance security:
        <ul>
          <li><strong>Blockchain Security:</strong> Transactions and data are secured through cryptographic algorithms and consensus mechanisms inherent to blockchain technology.</li>
          <li><strong>User Control:</strong> Users have control over their own data and can manage their privacy settings through their decentralized wallets.</li>
        </ul>
      </p>
      <p style={privacyPolicyStyles.paragraph}>
        <span style={privacyPolicyStyles.strong}>5. Decentralization and Data Ownership:</span> As a Web3 entity, we do not hold or control personal data centrally. You retain full ownership of your data. Interactions and transactions occur directly on decentralized networks, giving you control and transparency over your information.
      </p>
      <p style={privacyPolicyStyles.paragraph}>
        <span style={privacyPolicyStyles.strong}>6. Changes to This Policy:</span> We may update this Privacy Policy to reflect changes in our decentralized operations. Updates will be communicated through decentralized channels, and we encourage you to review this policy periodically to stay informed about our practices.
      </p>
      <p style={privacyPolicyStyles.paragraph}>
        <span style={privacyPolicyStyles.strong}>7. Contact Us:</span> For any inquiries or concerns about this Privacy Policy, please reach out to us via decentralized communication channels or email at <a href="mailto:contact@topayfoundation.com">contact@topayfoundation.com</a>.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
