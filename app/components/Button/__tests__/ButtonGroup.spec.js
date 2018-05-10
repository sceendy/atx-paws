import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ButtonGroup from '../ButtonGroup';

configure({ adapter: new Adapter() });

let mockProps, wrapper, container;

const petTypes = [
  { name: 'dog', type: 'image', content: 'dog' },
  { name: 'cat', type: 'image', content: 'cat' },
  { name: 'all', type: 'text', content: 'both' }
];

const defaultProps = {
  label: "Pet Types",
  selected: petTypes[1].name,
  options: petTypes,
  dataTest: 'button-group'
};

beforeEach(() => {
  mockProps = {...defaultProps},
  wrapper = shallow(<ButtonGroup {...mockProps} />),
  container = wrapper.find({ 'data-test': 'button-group'})
});

describe('<Button Group/>', () => {

  it('Renders a div with the class btn-group', () => {
    expect(container.hasClass('btn-group')).toEqual(true);
  });

});