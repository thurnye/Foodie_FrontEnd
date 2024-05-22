import React from 'react';
import ReactDOM from 'react-dom';
import NewSingleRecipe from './NewSingleRecipe';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewSingleRecipe />, div);
  ReactDOM.unmountComponentAtNode(div);
});