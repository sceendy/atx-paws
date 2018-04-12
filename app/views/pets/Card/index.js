import React, { Component } from 'react';

import '../../../components/Typography';
import '../../../components/Card';

class PetCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card" key={this.props.animal_id}>
        <div className="card__image">
          <img src={this.props.media.images[0].url} />
        </div>
        <div className="card__content">
          <div className="card__title">{this.props.name}</div>
          <ul className="badge-list">
            <li className="badge">{this.props.sex === 'f' ? 'female' : 'male'}</li>
            <li className="badge">{this.props.age}</li>
            <li className="badge">{this.props.breedName}</li>
            { this.props.secondaryBreedName
              && <li className="badge">{this.props.secondaryBreedName}</li>
            }
          </ul>
        </div>
      </div>
    );
  }
};

export default PetCard;