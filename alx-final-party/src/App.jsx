import React, { useState, useEffect } from 'react';
import './App.css'

const namesArray = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Hannah'];


function App() {
  const [randomName, setRandomName] = useState('');

  useEffect(() => {
    // Function to get random unused name from namesArray
    const getRandomUnusedName = (usedNames) => {
      const unusedNames = namesArray.filter(name => !usedNames.includes(name));
      if (unusedNames.length === 0) return null;
      const randomIndex = Math.floor(Math.random() * unusedNames.length);
      return unusedNames[randomIndex];
    };

    // Get the used names from local storage or initialize an empty array
    let usedNames = JSON.parse(localStorage.getItem('usedNames')) || [];

    // Check if all names are used, reset the usedNames array
    if (usedNames.length === namesArray.length) {
      usedNames = [];
    }

    // Get a random unused name
    const randomUnusedName = getRandomUnusedName(usedNames);

    // Add the new name to usedNames and store it in local storage
    if (randomUnusedName) {
      usedNames.push(randomUnusedName);
      localStorage.setItem('usedNames', JSON.stringify(usedNames));
    }

    // Set the randomName state to display the name for the current visitor
    setRandomName(randomUnusedName);

  }, []);

  return (
    <div>
      <h1>Welcome to ALX Final Party at iHub</h1>
      <p>Random Name: {randomName}</p>
    </div>
  );
};

export default App
