import React, { useRef } from 'react';

const FileUpload = ({ formData, file, setFile }) => {
  const fileInputRef = useRef(null);
  
  const handleSend = () => {
    const myNumber = "+996702505071"; 
    const message = `Новый заказ!\nИмя: ${formData.name}\nРазмеры: ${formData.size}\nТкань: ${formData.fabric}\nТелефон: ${formData.phone}\nФайл: ${file ? file.name : 'Не выбран'}`;
    
    const url = `https://wa.me{myNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const styles = {
    section: { backgroundColor: '#fdf7f0', padding: '50px 40px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    dropZone: { border: '1px dashed #ccc', borderRadius: '12px', padding: '40px 20px', textAlign: 'center', color: '#718096' },
    sendBtn: { backgroundColor: '#EDC7D2', border: 'none', padding: '20px', borderRadius: '8px', width: '100%', fontWeight: 'bold', cursor: 'pointer' }
  };

  return (
    <div style={styles.section}>
      <div style={styles.dropZone} onClick={() => fileInputRef.current.click()}>
        <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
        <p>{file ? `Выбрано: ${file.name}` : "Перетащите файлы или нажмите, чтобы загрузить Или"}</p>
        <button style={{ background: 'none',border:"12px #323B49", cursor: 'pointer', color: '#666', padding:"10px"}}>
          Загрузить с компьютера
        </button>
      </div>
      <button style={styles.sendBtn} onClick={handleSend}>ОТПРАВИТЬ</button>
    </div>
  );
};

export default FileUpload;
