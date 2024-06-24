import React from 'react';
import ReactDOM from 'react-dom';
import GroupInfo from './GroupInfo';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GroupInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});