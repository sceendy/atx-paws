import { FetchPets } from '../../actions/pets';

const pets = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_PETS':
      return action.pets
    case 'TOGGLE_PET_PHOTO':
      return state.map(p =>
        pet(p, action)
      );
    default:
      return state;
  }
};

export default pets;