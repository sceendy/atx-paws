import fetch from 'cross-fetch';

export const REQUEST_PETS = 'REQUEST_PETS';
export const RECEIVE_PETS = 'RECEIVE_PETS';
export const SET_FILTER = 'SET_FILTER';
export const FILTER_PETS = 'FILTER_PETS';

const API_URL = 'https://data.austintexas.gov/resource/hye6-gvq2.json';

const requestPets = () => ({
  type: REQUEST_PETS,
});

const receivePets = (json) => ({
  type: RECEIVE_PETS,
  pets: json
});

export const SetFilter = (filters) => ({
  type: SET_FILTER,
  filters
});

export const FilterPets = (filterSelections) => ({
  type: FILTER_PETS,
  filterSelections
});

export const FetchPets = () => {
  return dispatch => {
    return (
      fetch(API_URL)
      .then(response => response.json())
      .then(json => dispatch(receivePets(json)))
    );
  };
};