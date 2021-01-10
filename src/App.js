import React from 'react';
import logo from './burger.svg';
import './App.css';
import URLForm from './Component/URLForm'

function App() {
  return (
    <div className="App">
      <section className="landing-page">
        <img src={logo} className="App-logo" alt="logo" />
        <URLForm />
      </section>
    </div>
  );
}

export default App;
