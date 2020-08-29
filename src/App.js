import React from 'react';
import './App.css';
import { FeedComponent } from './components/FeedComponent';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="container container-fluig">
      <ToastContainer></ToastContainer>
      <FeedComponent></FeedComponent>
    </div>
  );
}

export default App;
