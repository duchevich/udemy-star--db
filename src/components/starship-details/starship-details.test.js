import React from 'react';
import { shallow } from 'enzyme';
import StarshipDetails from './starship-details';

describe('<StarshipDetails />', () => {
  test('renders', () => {
    const wrapper = shallow(<StarshipDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
