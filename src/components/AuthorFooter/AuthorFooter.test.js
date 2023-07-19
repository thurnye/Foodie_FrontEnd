import React from 'react';
import ReactDOM from 'react-dom';
import AuthorFooter from './AuthorFooter';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthorFooter />, div);
  ReactDOM.unmountComponentAtNode(div);
});