import React from 'react';
import ReactDOM from 'react-dom';
import PaginationNav from './PaginationNav';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PaginationNav />, div);
  ReactDOM.unmountComponentAtNode(div);
});