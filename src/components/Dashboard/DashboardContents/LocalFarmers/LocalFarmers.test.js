import React from 'react';
import ReactDOM from 'react-dom';
import LocalFarmers from './LocalFarmers';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LocalFarmers />, div);
  ReactDOM.unmountComponentAtNode(div);
});