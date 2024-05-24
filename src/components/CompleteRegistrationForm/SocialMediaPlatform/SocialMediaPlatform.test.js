import React from 'react';
import ReactDOM from 'react-dom';
import SocialMediaPlatform from './SocialMediaPlatform';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SocialMediaPlatform />, div);
  ReactDOM.unmountComponentAtNode(div);
});