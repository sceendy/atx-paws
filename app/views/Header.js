import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from '../components/Nav';

const logo = require('../assets/logo.png');

const Header = () => {
  return (
    <div className={Nav.container}>
      <div className={Nav.main__header}>
        <Link to="/">
          <h1><img src={logo} alt="ATX Paw Finder logo"/></h1>
        </Link>
      </div>
    </div>
  )
};

export default Header;