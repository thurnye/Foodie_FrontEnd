import React from 'react';
import ReactDOM from 'react-dom';
import SingleForum from './SingleForum';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SingleForum />, div);
  ReactDOM.unmountComponentAtNode(div);
});