import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';

import '../components/Badge';
import '../components/Layout';
import '../components/Typography';

import Header from './Header';
import PetList from './pets/List';
import Map from './map/Maps';
import FilterForm from './pets/Filter';

import { FetchPets, FilterPets, SetFilter } from '../actions/pets';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(FetchPets());
    this.applyRouteParams();
  }

  applyRouteParams() {
    let searchTerms = this.props.location.search;
    const filterParsed = queryString.parse(searchTerms);
    this.handleFilterForm(filterParsed);
  }

  handleFilterForm(filter) {
    delete filter.onChange;
    this.props.dispatch(SetFilter(filter));
    this.props.dispatch(FilterPets(this.props.filter));
    let stringifyIt = queryString.stringify(filter);
    this.props.history.push(({search: stringifyIt}));
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <FilterForm 
            petType={this.props.filter.petType}
            sex={this.props.filter.sex}
            age={this.props.filter.age}
            onChange={filter => this.handleFilterForm(filter)}
          />
          <div className="main__layout">
            <PetList 
              filteredPets={this.props.filteredPets}
              filter={this.props.filter}
            />
            <Map />
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