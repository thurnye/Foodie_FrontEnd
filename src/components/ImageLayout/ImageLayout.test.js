import React from 'react';
import ReactDOM from 'react-dom';
import ImageLayout from './ImageLayout';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageLayout />, div);
  ReactDOM.unmountComponentAtNode(div);
});