import React, { useState } from 'react';
function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); 
    setGreeting(`Привет, ${name}!`);
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>приветствие</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введите ваше имя"
          value={name}
          onChange={handleChange}
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <button type="submit" style={{ marginLeft: '10px', padding: '10px', fontSize: '16px' }}>
          Отправить
        </button>
      </form>
      {greeting && <h2>{greeting}</h2>}
    </div>
  );
}

export default App;
