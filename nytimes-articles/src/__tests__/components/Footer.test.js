import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '../../components/Footer/Footer';

it('renders correctly Header ', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});