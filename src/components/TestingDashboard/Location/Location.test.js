import React from 'react';
import ReactDOM from 'react-dom';
import Location from './Location';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Location />, div);
  ReactDOM.unmountComponentAtNode(div);
});