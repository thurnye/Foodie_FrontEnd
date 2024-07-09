import React from 'react';
import ReactDOM from 'react-dom';
import GroupChat from './GroupChat';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GroupChat />, div);
  ReactDOM.unmountComponentAtNode(div);
});