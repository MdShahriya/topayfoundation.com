import React from "react";

const Maintenance: React.FC = () => {
  // Calculate estimated time (6 hours from now)
  const estimatedTime = new Date();
  estimatedTime.setHours(estimatedTime.getHours() + 6);
  
  const formattedTime = estimatedTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
  
  const formattedDate = estimatedTime.toLocaleDateString([], {
    month: 'short',
    day: 'numeric'
  });

  return (
    <div style={{
      fontFamily: 'Inter, system-ui, sans-serif',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      color: '#333',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '600px',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        margin: '1rem'
      }}>
        <img 
          src="/images/Logo.webp" 
          alt="TOPAY Foundation Logo" 
          style={{
            width: '120px',
            marginBottom: '1.5rem'
          }}
        />
        
        <h1 style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          color: '#0D7CE9'
        }}>
          We're Upgrading Our Website
        </h1>
        
        <div style={{
          width: '60px',
          height: '60px',
          margin: '0 auto 1.5rem',
          border: '5px solid #f3f3f3',
          borderTop: '5px solid #0D7CE9',
          borderRadius: '50%',
          animation: 'spin 2s linear infinite'
        }}></div>
        
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.6',
          marginBottom: '1.5rem'
        }}>
          Our team is currently enhancing the TOPAY Foundation website to provide you with an improved experience. We apologize for any inconvenience this may cause.
        </p>
        
        <div style={{
          padding: '1rem',
          backgroundColor: '#f0f7ff',
          borderRadius: '6px',
          marginBottom: '1.5rem'
        }}>
          <p style={{
            margin: 0,
            fontWeight: 'bold'
          }}>
            Estimated completion time:
          </p>
          <p style={{
            fontSize: '1.2rem',
            margin: '0.5rem 0 0',
            color: '#0D7CE9'
          }}>
            {formattedTime} on {formattedDate}
          </p>
        </div>
        
        <p style={{
          marginBottom: '1.5rem'
        }}>
          In the meantime, you can:
        </p>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          marginBottom: '1.5rem'
        }}>
          <a 
            href="https://docs.topayfoundation.com" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.75rem 1rem',
              backgroundColor: '#0D7CE9',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              transition: 'background-color 0.2s'
            }}
          >
            Visit Our Documentation
          </a>
          
          <a 
            href="https://t.me/TOPAYfoundation" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.75rem 1rem',
              backgroundColor: '#f8f9fa',
              color: '#333',
              textDecoration: 'none',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontWeight: 'bold',
              transition: 'background-color 0.2s'
            }}
          >
            Join Our Telegram Community
          </a>
        </div>
        
        <p style={{
          fontSize: '0.9rem',
          color: '#666'
        }}>
          Thank you for your patience and understanding.
        </p>
      </div>
      
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @media (max-width: 480px) {
            h1 {
              font-size: 1.5rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Maintenance;