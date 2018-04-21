import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

import PetCard from '../Card';

class PetList extends Component {
  render() {
    const filters = this.props.filter;
    const textPlural = this.props.filteredPets.length === 1 ? '' : 's';
    const filterText = (() => {
      const typeExists = this.props.filter.petType !== 'all';
      const values = Object.values(this.props.filter)
        .filter(v => v !== 'all' && typeof v !== 'undefined' && v.length !== 0)
        .map(v =>  v.toLowerCase().replace(/\+/g, ' '));

      return `${values.join(' ')}${typeExists ? 's' : ' pets'}`; 
    })();

    return (
      <div>
        <h3>{this.props.filteredPets.length} result{textPlural} for {filterText}</h3>
        {
          !this.props.filteredPets &&
          <p>LOADING....</p>
        }
        {
          this.props.filteredPets && this.props.filteredPets.length === 0 &&
          <p>No pets found.</p>
        }
        <LazyLoad height={'73vh'}>
          <div className="card__list">
            { this.props.filteredPets.map(pet =>
              <PetCard {...pet} key={pet.animal_id} />
            )}
          </div>
        </LazyLoad>
      </div>
    )
  }
};

export default PetList;