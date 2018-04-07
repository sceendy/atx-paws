import React, { Component } from 'react';

import '../components/Card';
import '../components/Badge';
import '../components/Button';
import '../components/Form';
import '../components/Layout';
import '../components/Nav';
import '../components/Typography';

import MyMapComponent from './map/Map.jsx';
import FilterForm from './pets/Filter';
import PetCard from './pets/Card';

import {
  fetchPets
} from '../actions/pets';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    }
  }

  getNewPets() {
    return fetch('https://data.austintexas.gov/resource/hye6-gvq2.json', {
      method: 'GET'
    }).then(data => data.json());
  }

  getPet(id) {
    return fetch('https://data.austintexas.gov/resource/hye6-gvq2.json', {
      method: 'GET'
    }).then(data => data.json());
  }

  componentWillMount(){      
    this.getNewPets().then(pets => this.setState({pets}));
  }

  render() {
    return (
      <div>
        <div className="u--background-blue">
          <div className="container">
            <div className="main__header">
              <h1>ATX Paws</h1>
              <em className="u--text-sm">This map shows all stray cats and dogs that are currently listed in AAC's database for no longer than a week. </em>
            </div>
          </div>
        </div>
        
        <div className="container">
          <FilterForm />
          <div className="main__layout">
            <div className="card__list">
              <h3>{this.state.pets.length} results for all pets</h3>
              { this.state.pets.map(pet => {
                return (
                  <PetCard
                    key={pet.animal_id}
                    {...pet}
                    />
                )})
              }
            </div>
            <div className="map__container">
            <MyMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
            </div>
          </div>
        </div>
      </div>);
  }
}