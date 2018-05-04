import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PetCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card" key={this.props.animal_id} data-test="pet-card">
        <div className="card__image">
          <img
            src={`https://petharbor.com/get_image.asp?RES=Detail&ID=${this.props.animal_id}&LOCATION=ASTN`}
            alt={`Image for pet #${this.props.animal_id}`}
          />
        </div>
        <div className="card__content">
          <div className="card__title">{this.props.looks_like}</div>
          <ul className="badge-list">
            <li className="badge">{this.props.type}</li>
            <li className="badge">{this.props.sex}</li>
            <li className="badge">{this.props.age}</li>
            <li className="badge">{this.props.color}</li>
          </ul>
        </div>
      </div>
    );
  }
};

PetCard.propTypes = {
  animal_id: PropTypes.string,
  looks_life: PropTypes.string,
  type: PropTypes.string,
  sex: PropTypes.string,
  age: PropTypes.string,
  color: PropTypes.string
}

export default PetCard;