import React from 'react';
import ReactDOM from 'react-dom';
import ChatMessageCard from './ChatMessageCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatMessageCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});