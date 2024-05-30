import React from 'react';
import ReactDOM from 'react-dom';
import CookBookContainer from './CookBookContainer';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CookBookContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});