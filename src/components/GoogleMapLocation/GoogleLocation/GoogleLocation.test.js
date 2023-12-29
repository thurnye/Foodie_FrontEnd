import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLocation from './GoogleLocation';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GoogleLocation />, div);
  ReactDOM.unmountComponentAtNode(div);
});