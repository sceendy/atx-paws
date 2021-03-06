import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';

import '../components/Layout';
import '../components/Typography';

const API_URL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.MAP_KEY || ''}`;

import Header from './Header';
import PetList from './pets/List';
import Map from './map';
import FilterForm from './pets/Filter';

import { SelectPet, FetchPets, FilterPets, SetFilter } from '../actions/pets';

class App extends Component {
  constructor(props){
    super(props);
    this.props.history.listen((location, action) => {
      if (location.search === '') this.resetFilter();
    });

    this.handleFilterForm = this.handleFilterForm.bind(this);
  }

  componentDidMount(){
    const applyFilter = async () => {
      const loadPets = await this.props.dispatch(FetchPets());
      if (loadPets) {
        if (this.props.location.search) {
          const filterParsed = queryString.parse(this.props.location.search);
          this.handleFilterForm(filterParsed);
        }
      }
    }
    applyFilter();
  }

  plotMarkers() {
    if (this.props.filteredPets) {
      return this.props.filteredPets.map((pet) => {
        let type = pet.type.toLowerCase();
        return ({
          id: pet.animal_id,
          latitude: Number(pet.location.latitude),
          longitude: Number(pet.location.longitude),
          type: type
        });
      });
    }
  }

  handleFilterForm(filter) {
    this.props.dispatch(SetFilter(filter));
    this.props.dispatch(FilterPets(filter));

    delete filter.onChange;
    let stringifyIt = queryString.stringify(filter);
    this.props.history.push(({search: stringifyIt}));
  }

  resetFilter() {
    this.handleFilterForm({
      sex: 'all',
      petType: 'all',
      //atAAC: false
    });
  }

  selectPet(id) {
    this.props.dispatch(SelectPet(id));
    const selectedCard = document.getElementById(id);
    selectedCard.scrollIntoView({ behavior: 'smooth'});
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <FilterForm 
            {...this.props.filter}
            onChange={filter => this.handleFilterForm(filter)}
            resetForm={this.props.resetFilter}
          />
          <div className="main__layout">
            <PetList
              selectedPet={this.props.selectedPet}
              filteredPets={this.props.filteredPets}
              filter={this.props.filter}
              onPetSelected={id => this.selectPet(id)}
            />
            <div className="map__container u--xs-hide">
              <Map
                isMarkerShown
                googleMapURL={API_URL}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100vh` }} />}
                markerData={this.plotMarkers()}
                selectedPet={this.props.selectedPet}
                onMarkerSelected={id => this.selectPet(id)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapState = state => ({
  pets: state.pets.initial,
  filteredPets: state.pets.filteredPets,
  filter: state.filter,
  selectedPet: state.pets.selectedPet
});

export default withRouter(connect(mapState)(App));