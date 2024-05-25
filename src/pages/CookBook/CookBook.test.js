import React from 'react';
import ReactDOM from 'react-dom';
import CookBook from './CookBook';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CookBook />, div);
  ReactDOM.unmountComponentAtNode(div);
});