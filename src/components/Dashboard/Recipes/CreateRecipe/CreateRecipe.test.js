import React from 'react';
import ReactDOM from 'react-dom';
import CreateRecipe from './CreateRecipe';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateRecipe />, div);
  ReactDOM.unmountComponentAtNode(div);
});