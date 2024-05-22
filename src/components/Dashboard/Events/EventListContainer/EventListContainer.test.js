import React from 'react';
import ReactDOM from 'react-dom';
import EventListContainer from './EventListContainer';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventListContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});