import { SetFilter } from '../../actions/pets';

const initialFilter = {
  sex: 'all',
  petType: 'all',
  //atAAC: false
};

const filter = (state = initialFilter, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        sex: action.sex || initialFilter.sex,
        petType: action.petType || initialFilter.petType,
        //atAAC: action.atAAC || initialFilter.atAAC
      };
    default:
      return state;
  }
};

export default filter;