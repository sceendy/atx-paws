import { FetchPets, FilterPets, SelectPet } from '../../actions/pets';

const pets = (state = {initial: [], filteredPets: [], selectedPet: ''}, action) => {
  switch (action.type) {
    case 'SELECT_PET':
      return {
        ...state,
        selectedPet: action.selectedPet
      };
    case 'FILTER_PETS':
      return {
        ...state,
        filteredPets: state.initial.filter(p => {
          // const isAtAAC = p.at_aac.charAt(0) === 'Y';
          // && (action.atAAC === false || action.atAAC === isAtAAC.toString())

          if ((action.sex === 'all' || action.sex === p.sex)
            && (action.petType === 'all' || action.petType.toLowerCase() === p.type.toLowerCase())) {
            return p;
          } else {
            return;
          }
        })
      };
    case 'RECEIVE_PETS':
      return {
        ...state,
        initial: action.pets,
        filteredPets: action.pets
      };
    default:
      return state;
  }
};

export default pets;