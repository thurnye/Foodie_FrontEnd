import React from 'react';
import ReactDOM from 'react-dom';
import Unsplash from './Unsplash';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Unsplash />, div);
  ReactDOM.unmountComponentAtNode(div);
});