import React from 'react';
import ReactDOM from 'react-dom';
import RecipesCard from './RecipesCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RecipesCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});