import React, { useState } from 'react';
import CalculationForm from './CalculationForm';
import FileUpload from './FileUpload';

const MainForm = () => {
  const [formData, setFormData] = useState({
    name: '', size: '', fabric: '', phone: ''
  });
  const [file, setFile] = useState(null);

  const containerStyle = {
    display: 'flex',
    maxWidth: '900px',
    margin: '50px auto',
    borderRadius: '20px',
    overflow: 'hidden',
    minHeight: '550px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={containerStyle}>
      <CalculationForm formData={formData} setFormData={setFormData} />
      <FileUpload formData={formData} file={file} setFile={setFile} />
    </div>
  );
};

export default MainForm;
