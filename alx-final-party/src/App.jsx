import React, { useState, useEffect } from 'react';
import './App.css'

const namesArray = ['The greatest glory in living lies not in never falling, but in rising every time we fall.',
  'The future belongs to those who believe in the beauty of their dreams.',
  'Success is not final, failure is not fatal: It is the courage to continue that counts.',
  'The only limit to our realization of tomorrow will be our doubts of today.',
  'The way to get started is to quit talking and begin doing.',
  'It is during our darkest moments that we must focus to see the light.',
    'You’re off to great places, today is your day. Your mountain is waiting, so get on your way.',
  'You always pass failure on the way to succes.',
  'Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before.',
  'You’re braver than you believe, and stronger than you seem, and smarter than you think.',
  'It always seems impossible until it is done.',
  'When you can’t find the sunshine, be the sunshine!',
  'Happiness is not a station you arrive at, but a manner of traveling.',
  'It makes a big difference in your life when you stay positive.',
  'You are never too old to set another goal or dream a new dream.',
  'It’s not whether you get knocked down, it’s whether you get up.',
  'It ain’t about how hard ya hit. It’s about how hard you can get hit and keep moving forward.',
  'The struggle you’re in toad is developing the strength you need tomorrow.',
  'The way I see it, if you want the rainbow, you gotta put up with the rain.',
  'Make each day your masterpiece.',
  'A truly happy person is one who can enjoy the scenery while on a detour.',
  'Keep your face to the sunshine and you cannot see a shadow.',
  'A positive attitude causes a chain reaction of positive thoughts, events and outcomes. It is a catalyst and it sparks extraordinary results.',
  'Don’t forget to tell yourself positive things daily! You must love yourself internally to glow externally.',
  'The harder the battle, the sweeter the victory.',
  'Never say never because limits, like fears, are often just an illusion.',
  'You miss 100% of the shots you don’t take.',
  'Winners never quit and quitters never win.',
  'You can’t put a limit on anything. The more you dream, the farther you get.'
];


function App() {
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
          <h3>one more 4 ALX at ihub</h3>
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
      <div className='ownership'>
        <p>by iHub SE Learners</p>
      </div>
    </div>
  );
};

export default App
