import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../Button';

configure({ adapter: new Adapter() });

let mockProps, wrapper, container;

const defaultProps = {
  text: 'cancel',
  dataTest: 'button',
  type: 'secondary',
  onClick: () => {},
};

beforeEach(() => {
  mockProps = {...defaultProps},
  wrapper = shallow(<Button {...mockProps} />),
  container = wrapper.find({ 'data-test': 'button'})
});

describe('<Button />', () => {

  it('Renders a button with the default className of btn', () => {
    expect(container.type()).toEqual('button');
    expect(container.hasClass('btn')).toEqual(true);
  });

  it('Renders a button with the className according to type', () => {
    expect(container.hasClass('btn--secondary')).toEqual(true);
  });

  it('Renders button with text value', () => {
    mockProps = {...defaultProps, text: 'HELLO EVERYONE!'};
    wrapper = shallow(<Button {...mockProps} />);
    expect(wrapper.text()).toEqual('HELLO EVERYONE!');
  });

  it('Provides a submit button when button type is primary', () => {
    mockProps = {...defaultProps, type: 'primary'};
    wrapper = shallow(<Button {...mockProps} />);
    expect(wrapper.find({ type: 'submit' }).exists()).toEqual(true);
  });

  it('Runs function onClick', () => {
    const mockCallBack = jest.fn();
    mockProps = {...defaultProps, onClick: mockCallBack() };
    container.simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});