import React from 'react';
import ReactDOM from 'react-dom';
import UpComingEvents from './UpComingEvents';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UpComingEvents />, div);
  ReactDOM.unmountComponentAtNode(div);
});