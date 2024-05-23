import React from 'react';
import ReactDOM from 'react-dom';
import NewsFeeds from './NewsFeeds';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewsFeeds />, div);
  ReactDOM.unmountComponentAtNode(div);
});