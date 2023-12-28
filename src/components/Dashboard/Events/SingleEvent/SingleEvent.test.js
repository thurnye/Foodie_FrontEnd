import React from 'react';
import ReactDOM from 'react-dom';
import SingleEvent from './SingleEvent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SingleEvent />, div);
  ReactDOM.unmountComponentAtNode(div);
});