import { combineReducers } from 'redux';

import filter from './filter';
import pets from './pets';

const petFinderApp = combineReducers({
  pets,
  filter
});


export default petFinderApp;