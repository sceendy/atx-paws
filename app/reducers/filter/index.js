import { SetFilter } from '../../actions/pets';

const filter = (state = { sex: 'all', type: 'Both'}, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        sex: action.filters.sex,
        type: action.filters.type
      };
    default:
      return state;
  }
};

export default filter;