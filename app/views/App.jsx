import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../components/Badge';
import '../components/Layout';
import '../components/Typography';

import Map from './map/Map.jsx';
import Header from './Header';
import FilterForm from './pets/Filter';
import PetCard from './pets/Card';

import { FetchPets, SetFilter } from '../actions/pets';

class App extends Component {
  constructor() {
    super();
    this.handleFilterForm = this.handleFilterForm.bind(this);
  }

  plotMarkers() {
    return this.props.pets.map((pet) => {
      let type = pet.type.toLowerCase();
      return ({
        id: pet.animal_id,
        latitude: Number(pet.location.latitude),
        longitude: Number(pet.location.longitude),
        typeUrl: `https://sceendy.com/atx-paw-finder/assets/${type}-color.svg`
      });
    });
  }

  componentDidMount(){
    this.props.dispatch(FetchPets());
  }

  handleFilterForm(filter) {
    this.props.dispatch(SetFilter(filter));
  }

  render() {
    console.log(this.props);
    const emptyPetsList = this.props.pets.length === 0;

    return (
      <div>
        <Header />
        <div className="container">
          <FilterForm 
            type="Both"
            sex="all"
            onChange={(filter) => this.handleFilterForm(filter)}
          />
          <div className="main__layout">
            <div className="card__list">
              <h3>{this.props.pets.length} results for all pets</h3>

              { emptyPetsList &&
                <div>no pets found</div>
              }

              { this.props.pets.map(pet => {
                return (
                  <PetCard {...pet} key={pet.animal_id} />
                )})
              }
            </div>
            <div className="map__container">
              <Map
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `80vh` }} />}
                markerData={this.plotMarkers()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapState = state => ({
  pets: state,
});

export default connect(mapState)(App);