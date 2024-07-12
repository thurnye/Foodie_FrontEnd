import React from 'react';
import ReactDOM from 'react-dom';
import FilterRecipe from './FilterRecipe';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FilterRecipe />, div);
  ReactDOM.unmountComponentAtNode(div);
});