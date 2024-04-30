import React from 'react';
import ReactDOM from 'react-dom';
import EventBrit from './EventBrit';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventBrit />, div);
  ReactDOM.unmountComponentAtNode(div);
});