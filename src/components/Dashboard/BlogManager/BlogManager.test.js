import React from 'react';
import ReactDOM from 'react-dom';
import BlogManager from './BlogManager';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlogManager />, div);
  ReactDOM.unmountComponentAtNode(div);
});