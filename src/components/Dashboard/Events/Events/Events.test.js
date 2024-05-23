import React from 'react';
import ReactDOM from 'react-dom';
import Events from './Events';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Events />, div);
  ReactDOM.unmountComponentAtNode(div);
});