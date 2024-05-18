import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/contact');
  };

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
      <button onClick={handleNavigate}>Go to Contact</button>
    </div>
  );
};

export default Home;
