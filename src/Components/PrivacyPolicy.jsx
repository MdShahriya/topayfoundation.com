import React from 'react';
import '../styles/PrivacyPolicy.css'; // External CSS file

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-heading">Privacy Policy</h1>
      <p className="privacy-policy-paragraph">
        Welcome to TOPAY FOUNDATION. This Privacy Policy outlines our commitment to transparency and user empowerment within our decentralized ecosystem. As a Web3 entity, we operate under principles of decentralization, ensuring users retain full ownership and control of their data. This policy provides an overview of how we handle information within our platform.
      </p>
      <div className="privacy-policy-paragraph">
        <strong>1. Information Collection:</strong>
        <ul>
          <li><strong>Decentralized Data:</strong> User interactions, including wallet addresses and transaction details, are recorded directly on blockchain or distributed ledger technology.</li>
          <li><strong>Metadata:</strong> We may collect non-personal metadata, such as transaction statistics and network performance, to optimize our services.</li>
          <li><strong>Third-Party Interactions:</strong> Any data shared with third-party decentralized applications (dApps) is governed by the privacy policies of those entities.</li>
        </ul>
      </div>
      <div className="privacy-policy-paragraph">
        <strong>2. Use of Information:</strong>
        <ul>
          <li>Enhance and improve our decentralized applications (dApps).</li>
          <li>Facilitate secure, efficient, and transparent transactions and user interactions.</li>
          <li>Deliver updates and service improvements through decentralized channels.</li>
          <li>Support compliance with applicable regulations, including anti-money laundering (AML) and know your customer (KYC) requirements.</li>
        </ul>
      </div>
      {/* Repeat the fix for all other sections */}
      <p className="privacy-policy-paragraph">
        <strong>9. Contact Information:</strong> For questions or concerns about this Privacy Policy, you may reach out via decentralized communication channels or email at <a href="mailto:contact@topayfoundation.com">contact@topayfoundation.com</a>.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
