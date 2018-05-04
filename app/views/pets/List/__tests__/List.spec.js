import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LazyLoad from 'react-lazyload';

configure({ adapter: new Adapter() });

import PetList from '../index.js';
import PetCard from '../../Card';

import mockPetsJSON from '../../__mocks__/mockPets.json';

let mockProps = {
  filter: {sex: 'neutered male', petType: 'dog'},
  filteredPets: [],
}

const emptyContent = (
  <p>No pets found.</p>
);

const list = (
  <LazyLoad height={'73vh'}>
    <div className="card__list">
      <PetCard />
      <PetCard />
    </div>
  </LazyLoad>
);

const headerText = "2 results for ";

test('<PetList /> to show NO PETS FOUND message', () => {
  const wrapper = shallow(<PetList {...mockProps} />);
  const container = wrapper.find({ 'data-test': 'pets-list'});
  expect(container.containsMatchingElement(emptyContent)).toEqual(true);
});

test('<PetList /> header text when 2 pets are listed', () => {
  mockProps = { filteredPets: mockPetsJSON };
  const wrapper = shallow(<PetList {...mockProps} />);
  const container = wrapper.find({ 'data-test': 'pets-list-header'});
  expect(container.text()).toEqual(headerText);
});

test('<PetList /> to show pets', () => {
  mockProps = { filteredPets: mockPetsJSON };
  const wrapper = shallow(<PetList {...mockProps} />);
  const container = wrapper.find({ 'data-test': 'pets-list'});
  expect(container.containsMatchingElement(list)).toEqual(true);
});