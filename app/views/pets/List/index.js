import React, { Component } from 'react';
import PetCard from '../Card';

class PetList extends Component {
  render() {
    const filter = 
      this.props.filter.sex !== 'all' 
      && this.props.filter.petType !== 'all' 
      && this.props.filter.age !== 'all';

    const filterText = filter ? 
      Object.values(this.props.filter).map(filter => filter).join(' ') + 's' : 
      ' pets';

    return (
      <div>
        <h3>{this.props.filteredPets.length} results for {filterText}</h3>
        {
          !this.props.filteredPets.length &&
          <p>No pets found.</p>
        }
        <div className="card__list">
          { this.props.filteredPets.map(pet =>
            <PetCard {...pet} key={pet.petId} />
          )}
        </div>
      </div>
    )
  }
};

export default PetList;