import React from 'react';
import ReactDOM from 'react-dom';
import CreateEvent from './CreateEvent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateEvent />, div);
  ReactDOM.unmountComponentAtNode(div);
});