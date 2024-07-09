import React from 'react';
import ReactDOM from 'react-dom';
import CreatePanelDiscussion from './CreatePanelDiscussion';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreatePanelDiscussion />, div);
  ReactDOM.unmountComponentAtNode(div);
});