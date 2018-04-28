import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

import PetCard from '../Card';

class PetList extends Component {
  render() {
    const filters = this.props.filter;
    const textPlural = this.props.filteredPets.length === 1 ? '' : 's';
    const filterText = (() => {
      let text = '';
      if (filters.sex !== 'all') text += filters.sex + ' ';
      if (filters.petType !== 'all') text += filters.petType + 's';
      if (filters.petType === 'all') text += ' pets'
      return text.toLowerCase();
    })();

    return (
      <article>
        <header className="u__text--blue">
          {this.props.filteredPets.length} result{textPlural} for {filterText}
        </header>
        { !this.props.filteredPets &&
          <p>LOADING....</p>
        }
        { this.props.filteredPets && this.props.filteredPets.length === 0 &&
          <p>No pets found.</p>
        }
        <LazyLoad height={'73vh'}>
          <div className="card__list">
            { this.props.filteredPets.map(pet =>
              <PetCard {...pet} key={pet.animal_id} />
            )}
          </div>
        </LazyLoad>
      </article>
    )
  }
};

export default PetList;