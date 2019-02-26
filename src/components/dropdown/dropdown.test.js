import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Dropdown from './dropdown.ui';

describe('Dropdown', () => {
  const props = {
    name: 'dropdown',
    options: [
      { value: 1, text: '1' },
      { value: 2, text: '2' },
      { value: 3, text: '3' }
    ],
    onChange: jest.fn()
  };

  it('renders without crashing', () => {
    shallow(<Dropdown {...props} />);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Dropdown {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
