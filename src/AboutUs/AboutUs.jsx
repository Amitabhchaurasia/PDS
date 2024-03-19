import React from 'react';

function AboutUs() {
  return (
    <div style={aboutUsContainer}>
      <h3 style={headingStyle}>Image-Based Plant Disease Detection</h3>
      <p style={paragraphStyle}>
        Early disease detection is crucial for farmers, but traditional methods are often
        time-consuming and require expertise. This project proposes a smart and efficient technique
        using image processing and machine learning to diagnose crop disease from images. Utilizes a
        large public dataset containing over 85,000 images across 38 different crop disease classes
        to train a powerful machine learning model. This machine learning approach promises faster,
        more accurate diagnoses, empowering farmers to take timely action and improve crop yields.
      </p>

      <div style={teamMembersContainer}>
        <h4 style={teamHeadingStyle}>Supervisor</h4>
        <ul style={teamListStyle}>
          <li>Baljinder Kaur (27952)</li>
        </ul>
      </div>

      <div style={teamMembersContainer}>
        <h4 style={teamHeadingStyle}>Team Members</h4>
        <ul style={teamListStyle}>
          <li>Diwakar Jha (12011499)</li>
          <br />
          <li style={{ marginBottom: '8px' }}>Amitabh Chaurasia (12004548)</li>
          
        </ul>
      </div>
    </div>
  );
}

const aboutUsContainer = {
  padding: '20px',
  backgroundColor: '#f4f4f4',
  borderRadius: '8px',
  maxWidth: '600px',
  margin: 'auto',
  marginTop: '20px'
};

const headingStyle = {
  textAlign: 'center',
  color: '#333',
};

const paragraphStyle = {
  textAlign: 'justify',
  marginTop: '15px',
  lineHeight: '1.5',
};

const teamMembersContainer = {
  marginTop: '30px',
};

const teamHeadingStyle = {
  textAlign: 'center',
  fontSize: '1.2em',
  color: '#555',
};

const teamListStyle = {
  listStyleType: 'none',
  padding: '0',
  textAlign: 'center',
};

export default AboutUs;
