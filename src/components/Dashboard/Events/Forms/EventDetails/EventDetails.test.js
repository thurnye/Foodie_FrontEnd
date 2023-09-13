import React from 'react';
import ReactDOM from 'react-dom';
import EventDetails from './EventDetails';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});