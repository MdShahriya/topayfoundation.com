import React from "react";
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-heading">Privacy Policy</h1>
      <p className="privacy-policy-paragraph">
        Welcome to TOPAY FOUNDATION. This Privacy Policy outlines our commitment to transparency, security, and user empowerment within our decentralized ecosystem. As a Web3 entity, we operate under principles of decentralization, ensuring users retain full ownership and control of their data. This policy provides an overview of how we handle information on our platform.
      </p>

      <h2 className="privacy-policy-subheading">1. Information Collection</h2>
      <p className="privacy-policy-paragraph">
        <strong>Minimal Data Collection:</strong> We collect only the essential information required for the functioning of our services. This may include wallet addresses, transaction data, and other blockchain-related information necessary for the operation of our platform.
      </p>
      <p className="privacy-policy-paragraph">
        <strong>User Control:</strong> You maintain complete control over your personal data. Any information shared with our platform is done so with your explicit consent and remains under your ownership.
      </p>

      <h2 className="privacy-policy-subheading">2. Use of Information</h2>
      <p className="privacy-policy-paragraph">
        <strong>Service Provision:</strong> We use collected information solely for providing, maintaining, and improving our services. This includes facilitating transactions, ensuring security, and enhancing user experience.
      </p>
      <p className="privacy-policy-paragraph">
        <strong>No Third-Party Sharing:</strong> We do not sell, rent, or share your personal information with third parties for marketing purposes. Any sharing of data is limited to what is necessary for the provision of our services.
      </p>

      <h2 className="privacy-policy-subheading">3. Data Security</h2>
      <p className="privacy-policy-paragraph">
        <strong>Blockchain Security:</strong> Our platform leverages the inherent security features of blockchain technology, including cryptographic protection and decentralized storage.
      </p>
      <p className="privacy-policy-paragraph">
        <strong>Additional Measures:</strong> We implement industry-standard security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
      </p>

      <h2 className="privacy-policy-subheading">4. User Rights</h2>
      <p className="privacy-policy-paragraph">
        <strong>Access and Control:</strong> You have the right to access, correct, or delete your personal information at any time. Our decentralized model ensures that you maintain sovereignty over your data.
      </p>
      <p className="privacy-policy-paragraph">
        <strong>Transparency:</strong> We are committed to providing clear information about our data practices. If you have any questions about how we handle your information, please contact us.
      </p>

      <h2 className="privacy-policy-subheading">5. Changes to This Policy</h2>
      <p className="privacy-policy-paragraph">
        We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify users of any material changes to this policy.
      </p>

      <h2 className="privacy-policy-subheading">6. Contact Us</h2>
      <p className="privacy-policy-paragraph">
        If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at privacy@topayfoundation.com.
      </p>

      <p className="privacy-policy-paragraph privacy-policy-date">
        Last Updated: November 1, 2023
      </p>
    </div>
  );
};

export default PrivacyPolicy;