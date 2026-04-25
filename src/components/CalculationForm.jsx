import React from 'react';

const CalculationForm = ({ formData, setFormData }) => {
  const inputStyle = {
    width: '100%', backgroundColor: 'transparent', border: '1px solid #444',
    borderRadius: '8px', padding: '16px', marginBottom: '15px', color: '#fff', outline: 'none'
  };

  return (
    <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '50px 40px', flex: 1 }}>
      <h1 style={{ fontSize: '32px', marginBottom: '40px', fontFamily: 'Viaoda Libre', fontWeight:"400", fontSize:"50px"}}>ПРОСЧЁТ ИЗДЕЛИЯ</h1>
      <input style={inputStyle} placeholder="Введите ваше имя" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
      <input style={inputStyle} placeholder="Размеры" value={formData.size} onChange={(e) => setFormData({...formData, size: e.target.value})} />
      <input style={inputStyle} placeholder="Название ткани" value={formData.fabric} onChange={(e) => setFormData({...formData, fabric: e.target.value})} />
      <input style={inputStyle} placeholder="Номер телефона" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
    </div>
  );
};

export default CalculationForm;
