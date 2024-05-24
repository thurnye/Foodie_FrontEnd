import React from 'react';
import styles from './SavedBookmarks.module.css';
import { Container } from '@mui/material';

const SavedBookmarks = () => (
  <div className={styles.SavedBookmarks}>
    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
      SavedBookmarks Component
      <ul class='list-group'>
        <li class='list-group-item'>Saved Items</li>
        <li class='list-group-item'>Bookmark item</li>
        <li class='list-group-item'>
          User-Generated Cookbook: Enable users to create and download their own
          personalized cookbook, compiling their favorite recipes from the blog.
        </li>
        <li class='list-group-item'>A fourth item</li>
        <li class='list-group-item'>And a fifth one</li>
      </ul>
    </Container>
  </div>
);

export default SavedBookmarks;
