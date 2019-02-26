import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from './app.ui';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
