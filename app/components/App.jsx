import React from 'react';

import './Card';
import './Badge';
import './Button';
import './Nav';
import './Typography';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="u--background-blue">
          <div className="container">
            <div className="main__header">
              <h1>ATX Paws</h1>
              <em>This map shows all stray cats and dogs that are currently listed in AAC's database for no longer than a week. </em>
            </div>
          </div>
        </div>
        
        <div className="container">
          <h2>
            <i className="material-icons">filter_list</i> Filter details about your pet
          </h2>
          <button className="btn btn--primary">Apply Filter</button>
          <div className="btn-group" role="group" aria-label="Pet Type">
            <button type="button" className="btn btn--secondary btn-group__item">dog</button>
            <button type="button" className="btn btn--secondary btn-group__item">cat</button>
            <button type="button" className="btn btn--secondary btn-group__item">all</button>
          </div>
          <select className="select__sec">
            <option>Neutered Male</option>
            <option>Spayed Female</option>
          </select>
          <div className="card">
            <div className="card__image"></div>
            <div className="card__title">Chihuahua Shorthair Mix</div>
            <div className="card__content">
              <ul className="badge-list">
                <li className="badge">Dog</li>
                <li className="badge">3 years</li>
              </ul>
            </div>
          </div>
        </div>
      </div>);
  }
}