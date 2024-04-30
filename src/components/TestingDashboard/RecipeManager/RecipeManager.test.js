import React from 'react';
import ReactDOM from 'react-dom';
import RecipeManager from './RecipeManager';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RecipeManager />, div);
  ReactDOM.unmountComponentAtNode(div);
});