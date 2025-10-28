import React from 'react';
import ReactDOM from 'react-dom';
import CookBookList from './CookBookList';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CookBookList />, div);
  ReactDOM.unmountComponentAtNode(div);
});