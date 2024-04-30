import React from 'react';
import ReactDOM from 'react-dom';
import RecipeNutritionalFacts from './RecipeNutritionalFacts';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RecipeNutritionalFacts />, div);
  ReactDOM.unmountComponentAtNode(div);
});