import React from 'react';
import ReactDOM from 'react-dom';
import DashboardRecipeCard from './DashboardRecipeCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DashboardRecipeCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});