import React from 'react';
import ReactDOM from 'react-dom';
import EventsContainer from './EventsContainer';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventsContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});