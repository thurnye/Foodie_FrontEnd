import React from 'react';
import ReactDOM from 'react-dom';
import PrivateChat from './PrivateChat';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PrivateChat />, div);
  ReactDOM.unmountComponentAtNode(div);
});
