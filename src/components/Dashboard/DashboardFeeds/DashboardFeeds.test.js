import React from 'react';
import ReactDOM from 'react-dom';
import DashboardFeeds from './DashboardFeeds';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DashboardFeeds />, div);
  ReactDOM.unmountComponentAtNode(div);
});