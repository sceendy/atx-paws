import fetch from 'cross-fetch';

export const REQUEST_PETS = 'REQUEST_PETS';
export const RECEIVE_PETS = 'RECEIVE_PETS';
export const SET_FILTER = 'SET_FILTER';

const API_URL = 'https://data.austintexas.gov/resource/hye6-gvq2.json';

const requestPets = () => ({
  type: REQUEST_PETS,
});

const receivePets = (json) => ({
  type: RECEIVE_PETS,
  pets: json
});

export const SetFilter = () => ({
  type: SET_FILTER,
});

export const FetchPets = () => {
  //console.log(fetch(API_URL).then(response => response.json()).then(json => dispatch(receivePets(json))));
  return dispatch => {
    return (
      fetch(API_URL)
      .then(response => response.json())
      .then(json => dispatch(receivePets(json)))
    );
  };
};