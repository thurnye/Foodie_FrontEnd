import React from 'react';
import ReactDOM from 'react-dom';
import ChatImage from './ChatImage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatImage />, div);
  ReactDOM.unmountComponentAtNode(div);
});