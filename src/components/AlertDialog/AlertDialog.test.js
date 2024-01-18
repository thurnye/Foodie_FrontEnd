import React from 'react';
import ReactDOM from 'react-dom';
import AlertDialog from './AlertDialog';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AlertDialog />, div);
  ReactDOM.unmountComponentAtNode(div);
});