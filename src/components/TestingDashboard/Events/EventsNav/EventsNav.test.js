import React from 'react';
import ReactDOM from 'react-dom';
import EventsNav from './EventsNav';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventsNav />, div);
  ReactDOM.unmountComponentAtNode(div);
});