import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import BadgeList from '../../../components/BadgeList';

class PetCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card" key={this.props.animal_id} data-test="pet-card">
        <div className="card__image">
          <LazyLoad height={150} once>
            <img
              src={`https://petharbor.com/get_image.asp?RES=Detail&ID=${this.props.animal_id}&LOCATION=ASTN`}
              alt={`Image for pet #${this.props.animal_id}`}
            />
          </LazyLoad>
        </div>
        <div className="card__content">
          <div className="card__title">{this.props.looks_like}</div>
          <BadgeList items={[this.props.type, this.props.sex, this.props.age, this.props.color]} />
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