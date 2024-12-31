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
        Welcome to TOPAY FOUNDATION. This Privacy Policy outlines our commitment to transparency and user empowerment within our decentralized ecosystem. As a Web3 entity, we operate under principles of decentralization, ensuring users retain full ownership and control of their data. This policy provides an overview of how we handle information within our platform.
      </p>
      <p style={privacyPolicyStyles.paragraph}>
        <span style={privacyPolicyStyles.strong}>1. Information Collection:</span> In our decentralized framework, data collection operates differently compared to traditional systems. Specifically:
        <ul>
          <li><strong>Decentralized Data:</strong> User interactions, including wallet addresses and transaction details, are recorded directly on blockchain or distributed ledger technology.</li>
          <li><strong>Metadata:</strong> We may collect non-personal metadata, such as transaction statistics and network performance, to optimize our services.</li>
          <li><strong>Third-Party Interactions:</strong> Any data shared with third-party decentralized applications (dApps) is governed by the privacy policies of those entities.</li>
        </ul>
      </p>
      <p style={privacyPolicyStyles.paragraph}>
        <span style={privacyPolicyStyles.strong}>2. Use of Information:</span> Data collected through decentralized methods is utilized to:
        <ul>
          <li>Enhance and improve our decentralized applications (dApps).</li>
          <li>Facilitate secure, efficient, and transparent transactions and user interactions.</li>
          <li>Deliver updates and service improvements through decentralized channels.</li>
          <li>Support compliance with applicable regulations, including anti-money laundering (AML) and know your customer (KYC) requirements.</li>
        </ul>
      </p>
      <p style={privacyPolicyStyles.paragraph}>
        <span style={privacyPolicyStyles.strong}>3. Disclosure of Information:</span> Due to our decentralized structure:
        <ul>
          <li><strong>Public Records:</strong> Data recorded on blockchain or distributed ledgers is publicly accessible within the network.</li>
          <li><strong>No Centralized Disclosure:</strong> We do not have access to disclose personal data outside of what is inherent to decentralized protocols.</li>
          <li><strong>Regulatory Compliance:</strong> In cases of legal or regulatory requests, we comply by facilitating access to relevant public blockchain data.</li>
        </ul>
      </p>
      <p style={privacyPolicyStyles.paragraph}>
        <span style={privacyPolicyStyles.strong}>4. Security Measures:</span> Security is intrinsic to our decentralized technology:
        <ul>
          <li><strong>Blockchain Security:</strong> Transactions are secured using cryptographic algorithms and consensus mechanisms.</li>
          <li><strong>User Responsibility:</strong> Users maintain full control of their private keys and wallet credentials. The security of these assets rests with the user.</li>
          <li><strong>Smart Contract Audits:</strong> We implement rigorous audits of smart contracts to ensure secure and reliable operation.</li>
        </ul>
      </p>
      <p style={privacyPolicyStyles.paragraph}>
        <span style={privacyPolicyStyles.strong}>5. Data Ownership and Decentralization:</span> As part of our Web3 commitment:
        <ul>
          <li>Users retain full ownership of their data and assets.</li>
          <li>All interactions occur directly on decentralized networks, ensuring transparency and control.</li>
          <li>We prioritize user sovereignty, enabling full control over data sharing and interactions.</li>
        </ul>
      </p>
      <p style={privacyPolicyStyles.paragraph}>
        <span style={privacyPolicyStyles.strong}>6. Policy Updates:</span> We may revise this Privacy Policy as our decentralized ecosystem evolves. Any updates will be communicated transparently through our decentralized channels. We encourage regular review of this policy to stay informed about our practices.
      </p>
      <p style={privacyPolicyStyles.paragraph}>
        <span style={privacyPolicyStyles.strong}>7. User Rights and Transparency:</span> As a user-centric platform:
        <ul>
          <li>Users have the right to access their data stored on the blockchain.</li>
          <li>Transparency is maintained through open access to transaction histories and interactions on decentralized networks.</li>
          <li>Users can choose to engage with or disconnect from specific dApps at their discretion.</li>
        </ul>
      </p>
      <p style={privacyPolicyStyles.paragraph}>
        <span style={privacyPolicyStyles.strong}>8. Third-Party Applications:</span> When interacting with third-party decentralized applications through our platform:
        <ul>
          <li>Users are encouraged to review the privacy policies of these third-party applications.</li>
          <li>We are not responsible for the data handling practices of external dApps.</li>
        </ul>
      </p>
      <p style={privacyPolicyStyles.paragraph}>
        <span style={privacyPolicyStyles.strong}>9. Contact Information:</span> For questions or concerns about this Privacy Policy, you may reach out via decentralized communication channels or email at <a href="mailto:contact@topayfoundation.com">contact@topayfoundation.com</a>.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
