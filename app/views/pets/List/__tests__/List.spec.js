import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import PetList from '../index.js';

const mockProps = {
  filter: ['neutered male', 'dog'],
  filteredPets: [],
}

const emptyContent = (
  <p>No pets found.</p>
);

test('<PetList /> to show NO PETS FOUND message', () => {
  const wrapper = shallow(<PetList {...mockProps} />);
  const container = wrapper.find({'data-test': 'pets-list'});
  expect(wrapper.containsMatchingElement(emptyContent)).toEqual(true);
});