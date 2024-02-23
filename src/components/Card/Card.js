import React from 'react';

function Card(props) {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '400px',
    margin: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: props.color || '#ff0000', // Default color is red (#ff0000)
  };

  const titleStyle = {
    fontSize: '24px',
    marginBottom: '10px',
  };

  const contentStyle = {
    fontSize: '16px',
  };

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>{props.title}</h2>
      <p style={contentStyle}>{props.content}</p>
    </div>
  );
}

export default Card;