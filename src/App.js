import React from 'react';
import logo from './burger.svg';
import './App.css';
import URLForm from './Component/URLForm.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <URLForm />
      </header>
    </div>
  );
}

export default App;
