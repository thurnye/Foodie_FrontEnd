import React from 'react';
import ReactDOM from 'react-dom';
import AllForums from './AllForums';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AllForums />, div);
  ReactDOM.unmountComponentAtNode(div);
});