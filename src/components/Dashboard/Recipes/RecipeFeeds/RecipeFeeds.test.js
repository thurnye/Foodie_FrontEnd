import React from 'react';
import ReactDOM from 'react-dom';
import RecipeFeeds from './RecipeFeeds';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RecipeFeeds />, div);
  ReactDOM.unmountComponentAtNode(div);
});