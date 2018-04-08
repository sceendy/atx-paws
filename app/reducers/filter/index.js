import { SetFilter } from '../../actions/pets';

const filter = (state = { sex: 'all', petType: 'Both'}, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        sex: action.sex,
        petType: action.petType
      };
    default:
      return state;
  }
};

export default filter;