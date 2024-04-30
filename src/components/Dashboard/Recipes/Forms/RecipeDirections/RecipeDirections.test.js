import React from 'react';
import ReactDOM from 'react-dom';
import RecipeDirections from './RecipeDirections';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RecipeDirections />, div);
  ReactDOM.unmountComponentAtNode(div);
});