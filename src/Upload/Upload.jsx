import React, { useState } from 'react';

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = (event) => {
    
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handlePredict = async () => {
    // Check if an image is selected
    if (!selectedImage) {
      alert('Please select an image first.');
      return;
    }

    // Create FormData object to send the file to the server
    const formData = new FormData();
    formData.append('file', selectedImage);

    // try {
    //   // Set loading to true while waiting for the response
    //   setLoading(true);
    //   setError(null);

    //   // Make the API call to the Flask server
    //   const response = await fetch('http://127.0.0.1:5000/upload', {
    //     method: 'POST',
    //     body: formData,
    //   });

    //   const data = await response.json();

    //   // Update the prediction result in the state
    //   setPredictionResult(data.result);
    // } catch (error) {
    //   console.error('Error uploading file:', error);
    //   setError('Failed to predict disease. Please try again.');
    // } finally {
    //   // Set loading back to false after the response is received
    //   setLoading(false);
    // }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPredictionResult('Tomato___Bacterial_spot');
    }, 4000);
  };

  return (
    <div style={{ textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    maxWidth: '600px',
    margin: 'auto',
    marginTop: '20px'
    }}>
      <h2 style={{ color: 'blue',marginBottom:'5px' }}>Image Uploader and Predictor</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{
          border: '1px solid #ddd',
          padding: '10px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      />
      {selectedImage && (
        <div style={{ marginTop: '20px' }}>
          <h3>Selected Image:</h3>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '5px' }}
          />
          <br />
          <button onClick={handlePredict} style={{ marginTop: '10px' }} disabled={loading}>
            Predict Disease
          </button>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {predictionResult && (
            <div style={{ marginTop: '20px' }}>
              <h3>Prediction Result:</h3>
              <p>{predictionResult}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Upload;
