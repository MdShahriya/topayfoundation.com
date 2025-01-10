import React from 'react';
import '../styles/License.css'; // Assuming you have a CSS file for styling

const licenses = [
  { country: 'Afghanistan', license: 'Digital Payment Service License', active: false },
  { country: 'Bangladesh', license: 'Payment Service Provider License', active: false },
  { country: 'Bhutan', license: 'Payment System Operator License', active: false },
  { country: 'India', license: 'Payment System Operator License', active: false },
  { country: 'Maldives', license: 'Digital Banking Service License', active: false },
  { country: 'Nepal', license: 'Payment Gateway License', active: false },
  { country: 'Pakistan', license: 'Electronic Money Institution License', active: false },
  { country: 'Sri Lanka', license: 'Digital Currency Exchange License', active: false },
];

const License = () => {
  return (
    <div className="license-container">
      <header className="license-header">
        <h1>TOPAY Foundation Licenses</h1>
        <p>
          We are in the process of acquiring licenses for South Asian countries. Our licenses will be ready very soon.
        </p>
      </header>
      <section className="license-section">
        <table className="license-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>License & Registrations</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {licenses.map((item, index) => (
              <tr key={index}>
                <td>{item.country}</td>
                <td>{item.license}</td>
                <td className="status">
                  <span className="status-inactive">❌ Inactive</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <footer className="license-footer">
        <p>
          We are committed to compliance and will update this page as soon as the licenses are finalized. Thank you for
          your patience.
        </p>
      </footer>
    </div>
  );
};

export default License;
