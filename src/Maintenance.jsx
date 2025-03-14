import React from "react";

const Maintenance = () => {
  // Calculate estimated time (2 hours from now)
  const estimatedTime = new Date();
  estimatedTime.setHours(estimatedTime.getHours() + 2);
  
  const formattedTime = estimatedTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
  
  const formattedDate = estimatedTime.toLocaleDateString([], {
    month: 'short',
    day: 'numeric'
  });

  // Inline styles
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      background: 'linear-gradient(135deg, #0f3460 0%, #162238 100%)',
      color: '#ffffff',
    },
    content: {
      maxWidth: '700px',
      padding: '40px',
      background: 'rgba(22, 33, 62, 0.8)',
      borderRadius: '16px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      textAlign: 'center',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    icon: {
      marginBottom: '20px',
    },
    title: {
      fontSize: '32px',
      marginBottom: '20px',
      color: '#00d4ff',
      letterSpacing: '0.5px',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    },
    message: {
      fontSize: '18px',
      lineHeight: '1.6',
      marginBottom: '30px',
      color: 'rgba(255, 255, 255, 0.9)',
    },
    infoSection: {
      background: 'rgba(15, 52, 96, 0.7)',
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '30px',
      backdropFilter: 'blur(5px)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
    },
    infoItem: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '10px',
    },
    infoLabel: {
      fontWeight: 'bold',
      color: '#00d4ff',
    },
    infoValue: {
      color: '#4ecca3',
      fontWeight: 'bold',
    },
    featuresSection: {
      marginBottom: '30px',
    },
    featuresTitle: {
      fontSize: '22px',
      marginBottom: '15px',
      color: '#00d4ff',
    },
    featuresList: {
      listStyle: 'none',
      padding: '0',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: 'rgba(15, 52, 96, 0.5)',
      padding: '12px 20px',
      borderRadius: '10px',
      border: '1px solid rgba(255, 255, 255, 0.05)',
    },
    featureIcon: {
      fontSize: '24px',
      marginRight: '10px',
    },
    contactSection: {
      marginTop: '30px',
    },
    contactText: {
      marginBottom: '10px',
      color: 'rgba(255, 255, 255, 0.8)',
    },
    contactLink: {
      color: '#00d4ff',
      textDecoration: 'none',
      fontWeight: 'bold',
      padding: '8px 16px',
      background: 'rgba(0, 212, 255, 0.1)',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      display: 'inline-block',
    },
    contactLinkHover: {
      background: 'rgba(0, 212, 255, 0.2)',
      transform: 'translateY(-2px)',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.icon}>
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="58" stroke="#00d4ff" strokeWidth="4" />
            <path d="M82 60C82 72.1503 72.1503 82 60 82C47.8497 82 38 72.1503 38 60C38 47.8497 47.8497 38 60 38" stroke="#00d4ff" strokeWidth="4" strokeLinecap="round">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 60 60"
                to="360 60 60"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            <path d="M70 40L60 60L50 50" stroke="#4ecca3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        
        <h1 style={styles.title}>System Maintenance</h1>
        
        <p style={styles.message}>
          We're currently upgrading our systems to bring you an even better experience.
          Our team is working hard to complete the maintenance as quickly as possible.
        </p>
        
        <div style={styles.infoSection}>
          <div style={styles.infoItem}>
            <span style={styles.infoLabel}>Estimated Completion:</span>
            <span style={styles.infoValue}>{formattedTime} on {formattedDate}</span>
          </div>
        </div>
        
        <div style={styles.featuresSection}>
          <h3 style={styles.featuresTitle}>What's Coming</h3>
          <ul style={styles.featuresList}>
            <li style={styles.featureItem}>
              <span style={styles.featureIcon}>⚡</span>
              <span>Improved performance and stability</span>
            </li>
            <li style={styles.featureItem}>
              <span style={styles.featureIcon}>🔒</span>
              <span>Enhanced security measures</span>
            </li>
            <li style={styles.featureItem}>
              <span style={styles.featureIcon}>✨</span>
              <span>New features and gameplay improvements</span>
            </li>
          </ul>
        </div>
        
        <div style={styles.contactSection}>
          <p style={styles.contactText}>Need assistance? Contact us at:</p>
          <a 
            href="mailto:support@cryptoquest.com" 
            style={styles.contactLink}
            onMouseOver={(e) => {
              Object.assign(e.currentTarget.style, styles.contactLinkHover);
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = styles.contactLink.background;
              e.currentTarget.style.transform = 'none';
            }}
          >
            support@cryptoquest.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;