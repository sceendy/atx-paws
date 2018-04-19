import { SetFilter } from '../../actions/pets';

const initialFilter = {
  sex: 'all',
  petType: 'all',
};

const filter = (state = initialFilter, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        sex: action.sex,
        petType: action.petType,
      };
    default:
      return state;
  }
};

export default filter;