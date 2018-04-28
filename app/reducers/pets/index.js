import { FetchPets, FilterPets } from '../../actions/pets';

const pets = (state = {initial: [], filteredPets: []}, action) => {
  switch (action.type) {
    case 'FILTER_PETS':
      return {
        ...state,
        filteredPets: state.initial.filter(p => {
          const isAtAAC = p.at_aac.charAt(0) === 'Y';

          if ((action.sex === 'all' || action.sex === p.sex)
            && (action.atAAC === false || action.atAAC === isAtAAC.toString())
            && (action.petType === 'all' || action.petType.toLowerCase() === p.type.toLowerCase())) {
            return p;
          } else {
            return;
          }
        })
      };
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