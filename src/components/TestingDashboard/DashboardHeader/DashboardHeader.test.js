import React from 'react';
import ReactDOM from 'react-dom';
import DashboardHeader from './DashboardHeader';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DashboardHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});