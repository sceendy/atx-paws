import React from 'react';
import { Link } from 'react-router-dom';

import '../components/Nav';
const logo = require('../logo.png');

const Header = () => {
  return (
    <div className="container">
      <div className="main__header">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
    </div>
  )
};

export default Header;