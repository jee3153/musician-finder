import React from 'react';
import renderer from 'react-test-renderer';

import TrackList from './TrackList';

describe('TrackList Snapshot', () => {
  test('renders', () => {
    const component = renderer.create(
      <TrackList />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
