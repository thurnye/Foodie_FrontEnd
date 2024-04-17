import React from 'react';
import ReactDOM from 'react-dom';
import EventsCard from './EventsCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventsCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});