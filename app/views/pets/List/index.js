import React, { Component } from 'react';
import PetCard from '../Card';

class PetList extends Component {
  render() {
    const filters = this.props.filter;
    const filterText = (() => {
      const values = Object.values(this.props.filter)
        .filter(v => v !== 'all' && typeof v !== 'undefined' && v.length !== 0)
        .map(v => v.replace(/\+/g, ' '));

      if (values.length >= 1) {
        return values
          .reverse()
          .join(', ');
      } else {
        return 'all';
      }
    })();

    return (
      <div>
        <h3>{this.props.filteredPets.length} results for {filterText}</h3>
        {
          !this.props.filteredPets.length &&
          <p>No pets found.</p>
        }
        <div className="card__list">
          { this.props.filteredPets.map(pet =>
            <PetCard {...pet} key={pet.animal_id} />
          )}
        </div>
      </div>
    )
  }
};

export default PetList;