import './App.css';
import React from 'react';
import Feedback from './components/Feedback';

function App() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            {/* Feedback */}
            <Feedback />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
