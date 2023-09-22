import React from 'react';
import ReactDOM from 'react-dom';
import PreviewTicket from './PreviewTicket';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PreviewTicket />, div);
  ReactDOM.unmountComponentAtNode(div);
});