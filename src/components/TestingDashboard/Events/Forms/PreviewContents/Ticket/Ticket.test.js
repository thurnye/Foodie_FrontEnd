import React from 'react';
import ReactDOM from 'react-dom';
import Ticket from './Ticket';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ticket />, div);
  ReactDOM.unmountComponentAtNode(div);
});