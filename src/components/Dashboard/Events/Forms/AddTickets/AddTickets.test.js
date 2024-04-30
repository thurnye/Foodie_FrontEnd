import React from 'react';
import ReactDOM from 'react-dom';
import AddTickets from './AddTickets';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddTickets />, div);
  ReactDOM.unmountComponentAtNode(div);
});