import React from 'react';
import styles from './Events.module.css';

const Events = () => (
  <div className={styles.Events}>
    Events Component

    <ul class="list-group">
  <li class="list-group-item">
    toggle options:
    All, For You, This week, This month, Online, Free
  </li>
  <li class="list-group-item">Weekly/Monthly Challenges: Organize cooking challenges or themes for users to participate in, encouraging them to try new recipes and share their creations.

</li>
  <li class="list-group-item">Culinary Events and Workshops: Promote food-related events, workshops, or online cooking classes that users might be interested in attending.

</li>
  <li class="list-group-item">Cooking Competitions: Host cooking competitions where users can submit their own recipes based on specific themes or ingredients, and then the community votes for the winners.</li>
  <li class="list-group-item">User Polls and Surveys: Conduct occasional polls and surveys to gather feedback on user preferences, interests, and potential improvements.</li>
  <li class="list-group-item">And a fifth one</li>
</ul>

  </div>
);


export default Events;
