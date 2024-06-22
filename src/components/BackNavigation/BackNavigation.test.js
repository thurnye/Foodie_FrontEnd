import React from 'react';
import ReactDOM from 'react-dom';
import BackNavigation from './BackNavigation';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BackNavigation />, div);
  ReactDOM.unmountComponentAtNode(div);
});