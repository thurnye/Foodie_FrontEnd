import React from 'react';
import ReactDOM from 'react-dom';
import EventInfo from './EventInfo';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});