import React from 'react';
import ReactDOM from 'react-dom';
import RecipeDetails from './RecipeDetails';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RecipeDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});