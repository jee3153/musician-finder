import React from 'react';
import renderer from 'react-test-renderer';

import NoList from './NoList';

describe('NoList Snapshot', () => {
  test('renders', () => {
    const component = renderer.create(
      <NoList />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
