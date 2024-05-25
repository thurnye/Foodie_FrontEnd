import React from 'react';
import ReactDOM from 'react-dom';
import CookBookGeneration from './CookBookGeneration';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CookBookGeneration />, div);
  ReactDOM.unmountComponentAtNode(div);
});