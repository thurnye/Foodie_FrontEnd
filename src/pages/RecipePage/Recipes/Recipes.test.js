import React from 'react';
import ReactDOM from 'react-dom';
import Recipes from './Recipes';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Recipes />, div);
  ReactDOM.unmountComponentAtNode(div);
});