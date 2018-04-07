import fetch from 'cross-fetch';

export const REQUEST_PETS = 'REQUEST_PETS';
export const RECEIVE_PETS = 'RECEIVE_PETS';

const API_URL = 'https://data.austintexas.gov/resource/hye6-gvq2.json';

function requestPets(filter) {
  return {
    type: REQUEST_PETS,
    filter
  }
}

function receivePet(id, json) {
  return {
    type: RECEIVE_PET,
    filter,
    pet: json.data
  }
}

function receivePets(filter, json) {
  return {
    type: RECEIVE_PETS,
    filter,
    pets: json.data.children.map(child => child.data)
  }
}

function fetchPet(id) {
  return dispatch => {
    dispatch(requestPet(id));
    return fetch(API_URL)
      .then(response => response.json())
      .then(json => dispatch(receivePet(id, json)))
  }
}

function fetchPets(filters) {
  const filterString = Object.keys(filters)
    .filter(k => filters[k] !== '')
    .map(k => `${k}=${filters[k]}`)
    .join('&');

  return dispatch => {
    dispatch(requestPets(filter));
    return fetch(`${API_URL}?${filterString ? filterString : ''}`)
      .then(response => response.json())
      .then(json => dispatch(receivePets(filter, json)))
  }
}