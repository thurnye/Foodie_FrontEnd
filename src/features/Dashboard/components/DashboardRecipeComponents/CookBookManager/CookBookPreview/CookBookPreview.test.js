import React from 'react';
import ReactDOM from 'react-dom';
import CookBookPreview from './CookBookPreview';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CookBookPreview />, div);
  ReactDOM.unmountComponentAtNode(div);
});