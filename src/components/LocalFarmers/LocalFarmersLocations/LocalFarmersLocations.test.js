import React from 'react';
import ReactDOM from 'react-dom';
import LocalFarmersLocations from './LocalFarmersLocations';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LocalFarmersLocations />, div);
  ReactDOM.unmountComponentAtNode(div);
});