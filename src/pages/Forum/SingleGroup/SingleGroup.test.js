import React from 'react';
import ReactDOM from 'react-dom';
import SingleGroup from './SingleGroup';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SingleGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});