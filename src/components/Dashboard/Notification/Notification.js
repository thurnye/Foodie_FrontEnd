import React from 'react';
import styles from './Notification.module.css';
import { Container } from '@mui/material';

const Notification = () => (
  <div className={styles.Notification}>
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      Notification Component

      <ul class="list-group">
                    <li class="list-group-item">Recipe Adaptations: Encourage users to submit their adapted versions of existing recipes, incorporating regional variations or unique twists.
                    let the user also know who used their recipes, add this feature to the premium package and also a button on each recipe
                    </li>
                    <li class="list-group-item"></li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                  </ul>

    </Container>
  </div>
);


export default Notification;
