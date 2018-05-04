import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PetCard from '../index';

configure({ adapter: new Adapter() });

import mockPetsJSON from '../../__mocks__/mockPets.json';

const PET_TITLE = (<div className="card__title">Staffordshire Mix</div>);
const IMAGE_PATH = "https://petharbor.com/get_image.asp?RES=Detail&ID=A770638&LOCATION=ASTN";

let mockProps, wrapper, container;

beforeEach(() => {
  mockProps = {...mockPetsJSON[0]},
  wrapper = shallow(<PetCard {...mockProps} />),
  container = wrapper.find({ 'data-test': 'pet-card'})
});

test('<PetCard /> to render title', () => {
  expect(container.containsMatchingElement(PET_TITLE)).toEqual(true);
});

test('<PetCard /> to use correct url for image', () => {
  expect(container.find('img').prop('src')).toEqual(IMAGE_PATH);
});