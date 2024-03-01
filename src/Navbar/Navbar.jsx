import React, { useState } from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Upload from '../Upload/Upload';

const Navbar = () => {
  const [uploadPageOpen, setUploadPageOpen] = useState(true);

  const toggleUploadPage = () => {
    setUploadPageOpen(!uploadPageOpen);
  };

  const handleAboutUsClick = (event) => {
    event.preventDefault(); 
    setUploadPageOpen(false);
  };

  return (
    <>
      <div style={navbarStyle}>
        <a href="/" style={navLinkStyle} onClick={toggleUploadPage}>
          Home
        </a>
        <a href="/" style={navLinkStyle} onClick={handleAboutUsClick}>
          About Us
        </a>
      </div>

      {uploadPageOpen ? <Upload /> : <AboutUs />}
    </>
  );
};

const navbarStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: '#3498db',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  margin: '0',
};

const navLinkStyle = {
  marginLeft: '20px',
  color: '#ffffff',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: 'bold',
  transition: 'color 0.3s ease',
};

export default Navbar;
