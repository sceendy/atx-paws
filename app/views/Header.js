import React from 'react';

import '../components/Nav';
const logo = require('../logo.png');

const Header = () => {
  return (
    <div className="container">
      <div className="main__header">
        <img src={logo} />
      </div>
    </div>
  )
};

export default Header;