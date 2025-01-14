import React from 'react';
import '../styles/PrivacyPolicy.css'; // External CSS file

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-heading">Privacy Policy</h1>
      <p className="privacy-policy-paragraph">
        Welcome to TOPAY FOUNDATION. This Privacy Policy outlines our commitment to transparency, security, and user empowerment within our decentralized ecosystem. As a Web3 entity, we operate under principles of decentralization, ensuring users retain full ownership and control of their data. This policy provides an overview of how we handle information on our platform.
      </p>

      <div className="privacy-policy-paragraph">
        <strong>1. Information We Collect:</strong>
        <ul>
          <li>
            <strong>Decentralized Data:</strong> User interactions, including wallet addresses, transaction details, and smart contract interactions, are stored directly on blockchain or distributed ledger technology.
          </li>
          <li>
            <strong>Metadata:</strong> Non-personal metadata, such as transaction statistics, network usage, and performance metrics, may be collected to optimize our services.
          </li>
          <li>
            <strong>Third-Party Interactions:</strong> Any data shared with third-party decentralized applications (dApps) is governed by the privacy policies of those entities.
          </li>
          <li>
            <strong>Voluntary Information:</strong> Information provided voluntarily, such as email addresses for newsletters or feedback forms, is collected with explicit user consent.
          </li>
        </ul>
      </div>

      <div className="privacy-policy-paragraph">
        <strong>2. How We Use Your Information:</strong>
        <ul>
          <li>Improve and optimize the performance of our decentralized applications (dApps).</li>
          <li>Facilitate secure, transparent, and efficient transactions and interactions.</li>
          <li>Provide decentralized identity (DID) management and verification services.</li>
          <li>Deliver updates, alerts, and announcements through decentralized communication channels.</li>
          <li>Support compliance with applicable regulations, such as anti-money laundering (AML) and know your customer (KYC) requirements, where applicable.</li>
        </ul>
      </div>

      <div className="privacy-policy-paragraph">
        <strong>3. User Data Ownership:</strong>
        <ul>
          <li>Users retain full ownership and control of their personal data stored on the blockchain.</li>
          <li>
            TOPAY FOUNDATION does not have access to user private keys, passwords, or other authentication credentials.
          </li>
          <li>
            Data shared through decentralized storage or other blockchain mechanisms remains the sole responsibility of the user.
          </li>
        </ul>
      </div>

      <div className="privacy-policy-paragraph">
        <strong>4. Security Measures:</strong>
        <ul>
          <li>We implement industry-standard encryption protocols to ensure secure data transmission and storage.</li>
          <li>All transactions are verified through decentralized consensus mechanisms, ensuring tamper-proof records.</li>
          <li>Regular security audits and penetration testing are conducted to identify and mitigate vulnerabilities.</li>
        </ul>
      </div>

      <div className="privacy-policy-paragraph">
        <strong>5. User Rights:</strong>
        <ul>
          <li>
            <strong>Access:</strong> Users can view their transaction data and activity history stored on the blockchain.
          </li>
          <li>
            <strong>Data Portability:</strong> Users can transfer their data to other platforms or services via decentralized protocols.
          </li>
          <li>
            <strong>Revocation:</strong> Users can disconnect their wallets or revoke permissions for specific dApps at any time.
          </li>
        </ul>
      </div>

      <div className="privacy-policy-paragraph">
        <strong>6. Cookies and Tracking:</strong>
        <ul>
          <li>
            We do not use traditional cookies for tracking. However, certain decentralized protocols may log metadata, such as IP addresses, to prevent fraudulent activities.
          </li>
          <li>
            Users can opt out of any non-essential tracking through their wallet or browser settings.
          </li>
        </ul>
      </div>

      <div className="privacy-policy-paragraph">
        <strong>7. Third-Party Integrations:</strong>
        <ul>
          <li>
            Interactions with third-party services, such as decentralized exchanges (DEXs) or NFT marketplaces, are subject to their privacy policies.
          </li>
          <li>We are not responsible for the data practices of third-party dApps or platforms.</li>
        </ul>
      </div>

      <div className="privacy-policy-paragraph">
        <strong>8. Regulatory Compliance:</strong>
        <ul>
          <li>
            We comply with applicable data protection laws and regulations, including GDPR and CCPA, where relevant.
          </li>
          <li>
            Any data required for compliance purposes is processed with minimal collection and in line with user consent.
          </li>
        </ul>
      </div>

      <div className="privacy-policy-paragraph">
        <strong>9. Changes to This Policy:</strong>
        <p>
          This Privacy Policy may be updated periodically to reflect changes in regulations, technology, or our services. Any significant changes will be communicated through our website or decentralized communication channels.
        </p>
      </div>

      <div className="privacy-policy-paragraph">
        <strong>10. Contact Information:</strong>
        <p>
          For questions, feedback, or concerns about this Privacy Policy, you may contact us via decentralized communication channels or email at{' '}
          <a href="mailto:contact@topayfoundation.com">contact@topayfoundation.com</a>.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
