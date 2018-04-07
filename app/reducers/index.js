import { combineReducers } from 'redux';

import pets from './pets';
import filter from './filter';

const petFinderApp = combineReducers({
  pets,
  filter,
});

export default petFinderApp;