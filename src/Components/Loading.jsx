import React from 'react';

const Loading = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
    color: '#333',
  };

  const spinnerStyle = {
    width: '50px',
    height: '50px',
    border: '5px solid #ccc',
    borderTopColor: '#007bff',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  const styleTag = `
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <div style={containerStyle}>
      <style>{styleTag}</style>
      <div style={spinnerStyle}></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
