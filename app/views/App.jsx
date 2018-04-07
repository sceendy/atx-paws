import React, { Component } from 'react';

import '../components/Badge';
import '../components/Layout';
import '../components/Typography';

import Map from './map/Map.jsx';

import Header from './Header';
import FilterForm from './pets/Filter';
import PetCard from './pets/Card';

import {
  fetchPets,
  fetchPet
} from '../actions/pets';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    }
  }

  getNewPets() {
    return fetch('https://data.austintexas.gov/resource/hye6-gvq2.json?$limit=3', {
      method: 'GET'
    }).then(data => data.json());
  }

  getPet(id) {
    return fetch('https://data.austintexas.gov/resource/hye6-gvq2.json', {
      method: 'GET'
    }).then(data => data.json());
  }

  plotMarkers() {
    return this.state.pets.map((pet) => {
      return ({
        id: pet.animal_id,
        latitude: Number(pet.location.latitude),
        longitude: Number(pet.location.longitude),
        typeUrl: pet.type === 'Dog' ? 'https://sceendy.com/atx-paw-finder/assets/dog-color.svg' : 'https://sceendy.com/atx-paw-finder/assets/cat-color.svg'
      });
    });
  }

  componentWillMount(){      
    this.getNewPets().then(pets => this.setState({pets}));
  }

  render() {
    return (
      <div>
        <Header />
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
              <Map
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `450px` }} />}
                markerData={this.plotMarkers()}
              />
            </div>
          </div>
        </div>
      </div>);
  }
}