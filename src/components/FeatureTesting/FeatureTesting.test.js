import React from 'react';
import ReactDOM from 'react-dom';
import FeatureTesting from './FeatureTesting';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FeatureTesting />, div);
  ReactDOM.unmountComponentAtNode(div);
});