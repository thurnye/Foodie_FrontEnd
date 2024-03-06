import React from 'react';
import ReactDOM from 'react-dom';
import Event from './Event';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Event />, div);
  ReactDOM.unmountComponentAtNode(div);
});