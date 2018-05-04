import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Header from '../Header';

test('<Header /> to render logo', () => {
  const wrapper = shallow(<Header />);
  const container = wrapper.find({ 'data-test': 'logo'});
  expect(container.containsMatchingElement(<img />)).toEqual(true);
});