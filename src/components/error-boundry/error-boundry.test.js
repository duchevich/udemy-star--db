import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundry from './error-boundry';

describe('<ErrorBoundry />', () => {
  test('renders', () => {
    const wrapper = shallow(<ErrorBoundry />);
    expect(wrapper).toMatchSnapshot();
  });
});
