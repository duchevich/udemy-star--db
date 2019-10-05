import React from 'react';
import { shallow } from 'enzyme';
import ErrorButton from './error-button';

describe('<ErrorButton />', () => {
  test('renders', () => {
    const wrapper = shallow(<ErrorButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
