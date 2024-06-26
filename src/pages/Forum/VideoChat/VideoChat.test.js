import React from 'react';
import ReactDOM from 'react-dom';
import VideoChat from './VideoChat';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoChat />, div);
  ReactDOM.unmountComponentAtNode(div);
});