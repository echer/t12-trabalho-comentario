import React from 'react';
import './App.css';
import { NovoPostComponent } from './components/NovoPostComponent';
import { ComentarioComponent } from './components/ComentarioComponent';

function App() {
  return (
    <div className="container">
      <ComentarioComponent></ComentarioComponent>
      <NovoPostComponent></NovoPostComponent>
    </div>
  );
}

export default App;
