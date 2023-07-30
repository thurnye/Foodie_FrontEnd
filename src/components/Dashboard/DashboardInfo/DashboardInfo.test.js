import React from 'react';
import ReactDOM from 'react-dom';
import DashboardInfo from './DashboardInfo';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DashboardInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});