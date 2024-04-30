import React from 'react';
import ReactDOM from 'react-dom';
import EditEvent from './EditEvent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditEvent />, div);
  ReactDOM.unmountComponentAtNode(div);
});