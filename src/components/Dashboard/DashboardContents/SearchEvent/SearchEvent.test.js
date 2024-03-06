import React from 'react';
import ReactDOM from 'react-dom';
import SearchEvent from './SearchEvent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchEvent />, div);
  ReactDOM.unmountComponentAtNode(div);
});