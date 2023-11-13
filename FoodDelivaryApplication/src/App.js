// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  // State variables to store form data
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [foodItem, setFoodItem] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., send data to a server
    console.log('Form submitted:', { name, address, foodItem });
    // Clear the form fields after submission if needed
    setName('');
    setAddress('');
    setFoodItem('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Delicious Paradise</h1>
        

        {/* Food order form */}
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Food Item:
            <input
              type="text"
              value={foodItem}
              onChange={(e) => setFoodItem(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Place Order</button>
        </form>

        {/* Link to visit the site (you can remove or modify this) */}
        <a
          className="App-link"
          href="file:///C:/Users/vanma/OneDrive/Desktop/bootStrap/task1.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Our Site
        </a>
      </header>
    </div>
  );
}

export default App;

