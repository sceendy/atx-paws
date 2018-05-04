import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PetCard from '../Card';

import '../../../components/Card';

class PetList extends Component {
  render() {
    const textPlural = this.props.filteredPets.length === 1 ? '' : 's';
    const filterText = (() => {
      let text = '';
      if (this.props.filter) {
        if (this.props.filter.sex !== 'all') text += this.props.filter.sex + ' ';
        if (this.props.filter.petType !== 'all') text += this.props.filter.petType + 's';
        if (this.props.filter.petType === 'all') text += ' pets';
      }
      return text.toLowerCase();
    })();

    return (
      <article data-test="pets-list">
        <header className="u__text--blue" data-test="pets-list-header">
          {this.props.filteredPets.length} result{textPlural} for {filterText}
        </header>
        { !this.props.filteredPets &&
          <p>LOADING....</p>
        }
        { this.props.filteredPets && this.props.filteredPets.length === 0 &&
          <p>No pets found.</p>
        }
        <div className="card__list">
          { this.props.filteredPets.map(pet =>
            <PetCard {...pet} key={pet.animal_id} />
          )}
        </div>
      </article>
    )
  }
};

PetList.propTypes = {
  filteredPets: PropTypes.arrayOf(Object),
  filter: PropTypes.object,
};

export default PetList;