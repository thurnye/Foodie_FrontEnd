import React from 'react';
import ReactDOM from 'react-dom';
import Share from './Share';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Share />, div);
  ReactDOM.unmountComponentAtNode(div);
});