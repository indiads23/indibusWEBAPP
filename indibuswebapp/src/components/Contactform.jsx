import React from 'react';

const RegistrationForm = () => {
  const containerStyle = {
    textAlign: '',
    padding: 'px',
  };

  const inputStyle = {
    width: '100%',
    padding: '20px 20px',
    margin: '8px 0',
    display: 'inline-block',
    boxSizing: 'border-box',
    border: '0.5px solid #C9D4D5'
  };

  const buttonStyle = {
    backgroundColor: '#0E656A',
    color: 'white',
    padding: '14px 20px',
    margin: '8px 0',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
  };

  return (
    <form >
      <div style={containerStyle}>

        <input type="text" placeholder="Name" name="email" id="email" style={inputStyle} required />

        <input type="text" placeholder="Email" name="psw" id="psw" style={inputStyle} required />

        <input type="phoneno" placeholder="Phone Number" style={inputStyle} required />

        <button type="submit" style={buttonStyle} className="registerbtn">Submit</button>
      </div>
    </form>
  );
};

export default RegistrationForm;
