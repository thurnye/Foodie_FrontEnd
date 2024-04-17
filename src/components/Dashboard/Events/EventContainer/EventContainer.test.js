import React from 'react';
import ReactDOM from 'react-dom';
import EventContainer from './EventContainer';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});