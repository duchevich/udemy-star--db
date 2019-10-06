import React from 'react';
import { shallow } from 'enzyme';
import Row from './row';

describe('<Row />', () => {
  test('renders', () => {
    const wrapper = shallow(<Row />);
    expect(wrapper).toMatchSnapshot();
  });
});
