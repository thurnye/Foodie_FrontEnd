import React from 'react';
import ReactDOM from 'react-dom';
import RecipePreview from './RecipePreview';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RecipePreview />, div);
  ReactDOM.unmountComponentAtNode(div);
});