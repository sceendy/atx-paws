import { FetchPets, FilterPets } from '../../actions/pets';

const pets = (state = {initial: [], filteredPets: []}, action) => {
  switch (action.type) {
    case 'FILTER_PETS':
      return {
        ...state,
        filteredPets: state.initial.filter(p => p.sex == action.filterSelections.sex && p.type == action.filterSelections.type),
      }
    case 'RECEIVE_PETS':
      return {
        initial: action.pets,
        filteredPets: action.pets
      };
    default:
      return state;
  }
};

export default pets;