import React from 'react';
import ReactDOM from 'react-dom';
import VideoContainer from './VideoContainer';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});