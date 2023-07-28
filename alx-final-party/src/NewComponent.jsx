import React, { useState, useEffect } from 'react';
import './new_component.css';


const namesArray = ['"The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela',
  '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt',
  '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill',
  '"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt',
  '"The way to get started is to quit talking and begin doing." - Walt Disney',
  '"It is during our darkest moments that we must focus to see the light." - Aristotle'];

const NewComponent = () => {
  const [randomQuote, setRandomQuote] = useState('');

  useEffect(() => {
    // Function to get random unused quote from quotesArray
    const getRandomUnusedQuote = (usedQuotes) => {
      const unusedQuotes = namesArray.filter(quote => !usedQuotes.includes(quote));
      if (unusedQuotes.length === 0) return null;
      const randomIndex = Math.floor(Math.random() * unusedQuotes.length);
      return unusedQuotes[randomIndex];
    };

    // Get the used quotes from local storage or initialize an empty array
    let usedQuotes = JSON.parse(localStorage.getItem('usedQuotes')) || [];

    // Check if all quotes are used, reset the usedQuotes array
    if (usedQuotes.length === namesArray.length) {
      usedQuotes = [];
    }

    // Get a random unused quote
    const randomUnusedQuote = getRandomUnusedQuote(usedQuotes);

    // Add the new quote to usedQuotes and store it in local storage
    if (randomUnusedQuote) {
      usedQuotes.push(randomUnusedQuote);
      localStorage.setItem('usedQuotes', JSON.stringify(usedQuotes));
    }

    // Set the randomQuote state to display the quote for the current visitor
    setRandomQuote(randomUnusedQuote);

  }, []);

  return (
    <div className="main-container">
      {/* ALX Logo and Text */}
      <div className="row align-items-center logo-section">
        <div className="col-12 col-md-4">
          <img src="https://www.alxafrica.com/wp-content/uploads/2022/12/logo-white.svg" alt="ALX Logo" className="alx-logo" />
        </div>
        <div className="col-12 col-md-8">
          <h2 className="power-your-future">Power Your Future in Tech</h2>
        </div>
      </div>

      {/* Party Text */}
      <div className="row party-text">
        <div className="col-12 alx-ihub-party">
          <h3>one more for ALX at ihub</h3>
        </div>
      </div>

      {/* Random Quote Card */}
      <div className="row justify-content-center quote-card">
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <p>{randomQuote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewComponent;
