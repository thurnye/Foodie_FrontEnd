import React from 'react';
import ReactDOM from 'react-dom';
import EditRecipe from './EditRecipe';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditRecipe />, div);
  ReactDOM.unmountComponentAtNode(div);
});