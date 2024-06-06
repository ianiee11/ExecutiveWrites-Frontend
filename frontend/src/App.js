import React from 'react';
import { Link } from 'react-router-dom';

const App = ({ children }) => {
  return (
    <div>
      <header>
        <h1>My Writing Service</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/order">Order</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default App;
