import React from 'react';
import ReactDOM from 'react-dom';
import EventsList from './EventsList';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventsList />, div);
  ReactDOM.unmountComponentAtNode(div);
});