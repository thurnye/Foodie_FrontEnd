import React from 'react';
import ReactDOM from 'react-dom';
import CreateGroup from './CreateGroup';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});
