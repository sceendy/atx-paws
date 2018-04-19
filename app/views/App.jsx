import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';

import '../components/Badge';
import '../components/Layout';
import '../components/Typography';

import Header from './Header';
import PetList from './pets/List';
import Map from './map/Map.jsx';
import FilterForm from './pets/Filter';

import { FetchPets, FilterPets, SetFilter } from '../actions/pets';

class App extends Component {
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
          typeUrl: `https://sceendy.com/atx-paw-finder/assets/${type}-shadow.svg`
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
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `73vh` }} />}
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