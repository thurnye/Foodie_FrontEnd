import React from 'react';
import ReactDOM from 'react-dom';
import EventFeed from './EventFeed';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventFeed />, div);
  ReactDOM.unmountComponentAtNode(div);
});