import React from 'react';
import ReactDOM from 'react-dom';
import Media from './Media';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Media />, div);
  ReactDOM.unmountComponentAtNode(div);
});