import { FetchPets, FilterPets } from '../../actions/pets';

const pets = (state = {initial: [], filteredPets: []}, action) => {
  switch (action.type) {
    case 'FILTER_PETS':
      console.log(action);
      return {
        ...state,
        filteredPets: state.initial.filter(p => {
          if ((action.sex === 'all' || action.sex === p.sex)
            && (action.petType === 'all' || action.petType === p.petType)
            && (action.age === 'all' || action.age === p.age)){
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