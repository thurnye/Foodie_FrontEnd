import React from 'react';
import ReactDOM from 'react-dom';
import Schedule from './Schedule';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Schedule />, div);
  ReactDOM.unmountComponentAtNode(div);
});