import React from 'react';
import ReactDOM from 'react-dom';
import SavedBookmarks from './SavedBookmarks';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SavedBookmarks />, div);
  ReactDOM.unmountComponentAtNode(div);
});