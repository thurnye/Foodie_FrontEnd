import React from 'react';
import ReactDOM from 'react-dom';
import RecipeDiscoveries from './RecipeDiscoveries';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RecipeDiscoveries />, div);
  ReactDOM.unmountComponentAtNode(div);
});