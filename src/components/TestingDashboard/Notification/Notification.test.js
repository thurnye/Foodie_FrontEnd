import React from 'react';
import ReactDOM from 'react-dom';
import Notification from './Notification';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Notification />, div);
  ReactDOM.unmountComponentAtNode(div);
});