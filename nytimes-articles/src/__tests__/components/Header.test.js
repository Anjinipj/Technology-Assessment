import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../../components/Header/Header';

it('renders correctly Header ', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});