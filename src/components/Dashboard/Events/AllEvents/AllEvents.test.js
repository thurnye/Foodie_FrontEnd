import React from 'react';
import ReactDOM from 'react-dom';
import AllEvents from './AllEvents';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AllEvents />, div);
  ReactDOM.unmountComponentAtNode(div);
});