import React from 'react';
import ReactDOM from 'react-dom';
import EventList from './EventList';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventList />, div);
  ReactDOM.unmountComponentAtNode(div);
});