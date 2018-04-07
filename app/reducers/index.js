import { combineReducers } from 'redux';
import { FetchPets } from '../actions/pets';

const petFinderApp = (state = [], action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return state.filter(p => p.sex === action.filter.sex && p.type === action.filter.type);
    case 'RECEIVE_PETS':
      return action.pets;
    case 'TOGGLE_PET_PHOTO':
      return state.map(p =>
        pet(p, action)
      );
    default:
      return state;
  }
};


export default petFinderApp;