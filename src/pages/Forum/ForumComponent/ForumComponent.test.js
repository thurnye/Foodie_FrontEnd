import React from 'react';
import ReactDOM from 'react-dom';
import ForumComponent from './ForumComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ForumComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});