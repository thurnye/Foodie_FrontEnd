import React from 'react';
import ReactDOM from 'react-dom';
import GroupDiscussions from './GroupDiscussions';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GroupDiscussions />, div);
  ReactDOM.unmountComponentAtNode(div);
});