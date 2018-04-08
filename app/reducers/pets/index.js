import { FetchPets, FilterPets } from '../../actions/pets';

const pets = (state = {initial: [], filteredPets: []}, action) => {
  switch (action.type) {
    case 'FILTER_PETS':
      return {
        ...state,
        filteredPets: state.initial.filter(p => 
          action.petType && action.sex ? p.type === action.petType && p.sex === action.sex :
            action.petType ? p.type === action.petType : action.sex ? p.sex === action.sex : true
        )
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