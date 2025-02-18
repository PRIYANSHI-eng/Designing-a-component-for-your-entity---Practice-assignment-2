// App.js
import React from 'react';
import './App.css';  // Importing App.css for global styles
import Productcard from './components/productcard'; // Importing the lowercase-named Productcard component

function App() {
  return (
    <div className="App">
      <Productcard /> {/* Rendering the Productcard */}
    </div>
  );
}

export default App;
