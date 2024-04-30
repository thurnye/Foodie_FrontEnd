import React from 'react';
import ReactDOM from 'react-dom';
import Organizer from './Organizer';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Organizer />, div);
  ReactDOM.unmountComponentAtNode(div);
});