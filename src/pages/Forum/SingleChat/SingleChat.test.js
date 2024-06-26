import React from 'react';
import ReactDOM from 'react-dom';
import SingleChat from './SingleChat';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SingleChat />, div);
  ReactDOM.unmountComponentAtNode(div);
});