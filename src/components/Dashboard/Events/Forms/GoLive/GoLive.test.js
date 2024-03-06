import React from 'react';
import ReactDOM from 'react-dom';
import GoLive from './GoLive';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GoLive />, div);
  ReactDOM.unmountComponentAtNode(div);
});