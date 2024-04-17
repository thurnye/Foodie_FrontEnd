import React from 'react';
import ReactDOM from 'react-dom';
import ToastNotification from './ToastNotification';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToastNotification />, div);
  ReactDOM.unmountComponentAtNode(div);
});