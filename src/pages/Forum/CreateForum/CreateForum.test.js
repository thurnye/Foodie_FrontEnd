import React from 'react';
import ReactDOM from 'react-dom';
import CreateForum from './CreateForum';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateForum />, div);
  ReactDOM.unmountComponentAtNode(div);
});
