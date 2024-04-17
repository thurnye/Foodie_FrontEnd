import React from 'react';
import styles from './Notification.module.css';

const Notification = () => (
  <div className={styles.Notification}>
    Notification Component

    <ul class="list-group">
                  <li class="list-group-item">Recipe Adaptations: Encourage users to submit their adapted versions of existing recipes, incorporating regional variations or unique twists.
                  let the user also know who used their recipes, add this feature to the premium package and also a button on each recipe
                  </li>
                  <li class="list-group-item"></li>
                  <li class="list-group-item">A fourth item</li>
                  <li class="list-group-item">And a fifth one</li>
                </ul>
  </div>
);


export default Notification;
