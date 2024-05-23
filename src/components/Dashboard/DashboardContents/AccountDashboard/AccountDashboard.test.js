import React from 'react';
import ReactDOM from 'react-dom';
import AccountDashboard from './AccountDashboard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountDashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
