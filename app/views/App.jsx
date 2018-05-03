import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';

import '../components/Badge';
import '../components/Layout';
import '../components/Typography';

const dogMarker = require('../assets/dog-marker.svg');
const catMarker = require('../assets/cat-marker.svg');
const API_URL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.MAP_KEY || ''}`;

import Header from './Header';
import PetList from './pets/List';
import Map from './map';
import FilterForm from './pets/Filter';

import { FetchPets, FilterPets, SetFilter } from '../actions/pets';

class App extends Component {
  constructor(props){
    super(props);
    this.props.history.listen((location, action) => {
      if (location.search === "") this.resetFilter();
    });
  }

  componentDidMount(){
    this.applyRouteParams();
  }

  applyRouteParams() {
    Promise.resolve(this.props.dispatch(FetchPets()))
      .then(() => {
        let searchTerms = this.props.location.search;
        if (searchTerms) {
          const filterParsed = queryString.parse(searchTerms);
          this.handleFilterForm(filterParsed);
        }
      });
  }

  plotMarkers() {
    if (this.props.filteredPets) {
      return this.props.filteredPets.map((pet) => {
        let type = pet.type.toLowerCase();
        return ({
          id: pet.animal_id,
          latitude: Number(pet.location.latitude),
          longitude: Number(pet.location.longitude),
          typeUrl: type === 'dog' ? dogMarker : catMarker
        });
      });
    }
  }

  handleFilterForm(filter) {
    this.props.dispatch(SetFilter(filter));
    this.props.dispatch(FilterPets(filter));

    delete filter.filterSubmit;
    let stringifyIt = queryString.stringify(filter);
    this.props.history.push(({search: stringifyIt}));
  }

  resetFilter() {
    this.handleFilterForm({
      sex: 'all',
      petType: 'all',
      atAAC: false
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <FilterForm 
            {...this.props.filter}
            filterSubmit={filters => this.handleFilterForm(filters)}
          />
          <div className="main__layout">
            <PetList 
              filteredPets={this.props.filteredPets}
              filter={this.props.filter}
            />
            <div className="map__container u--xs-hide">
              <Map
                isMarkerShown
                googleMapURL={API_URL}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `75vh` }} />}
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
  pets: state.pets.initial,
  filteredPets: state.pets.filteredPets,
  filter: state.filter
});

export default withRouter(connect(mapState)(App));