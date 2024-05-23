import React from 'react';
import ReactDOM from 'react-dom';
import NewAvatar from './NewAvatar';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewAvatar />, div);
  ReactDOM.unmountComponentAtNode(div);
});