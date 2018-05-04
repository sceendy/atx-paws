import React from 'react';
import { Link } from 'react-router-dom';

import '../components/Nav';

const logo = require('../assets/logo.png');

const Header = () => {
  return (
    <div className="container">
      <div className="main__header">
        <Link to="/">
          <h1 data-test="logo">
            <img src={logo} alt="ATX Paw Finder logo"/>
          </h1>
        </Link>
      </div>
    </div>
  )
};

export default Header;