import React from 'react';
import ReactDOM from 'react-dom';
import RecipesContainer from './RecipesContainer';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RecipesContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});