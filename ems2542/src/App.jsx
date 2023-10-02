import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';
import Login from './pages/Login';
import Registration from './pages/Registration';
import LandingPage from './pages/LandingPage';
import Profile from './pages/Profile';

const App = () => {

  const backgroundImage = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp';

  return (
    <BrowserRouter>
        <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
