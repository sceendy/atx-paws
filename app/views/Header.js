import React from 'react';

import '../components/Nav';

const Header = () => {
  return (
    <div className="u--background-blue">
      <div className="container">
        <div className="main__header">
          <h1>ATX Paws</h1>
          <em className="u--text-sm">This map shows all stray cats and dogs that are currently listed in AAC's database for no longer than a week. </em>
        </div>
      </div>
    </div>
  )
}

export default Header;