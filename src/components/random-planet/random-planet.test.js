import React from 'react';
import { shallow } from 'enzyme';
import RandomPlanet from './random-planet';

describe('<RandomPlanet />', () => {
  test('renders', () => {
    const wrapper = shallow(<RandomPlanet />);
    expect(wrapper).toMatchSnapshot();
  });
});
