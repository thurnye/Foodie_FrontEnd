import React from 'react';
import ReactDOM from 'react-dom';
import BasicRecipeInfo from './BasicRecipeInfo';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BasicRecipeInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});