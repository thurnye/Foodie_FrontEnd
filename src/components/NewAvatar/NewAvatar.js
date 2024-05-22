import React from 'react';
import styles from './NewAvatar.module.css';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';


const NewAvatar = ({title, image, subHeader}) => (
  <div className={styles.NewAvatar}>
    <CardHeader
        avatar={
          <Avatar alt={title} src={image}/>
        }
        title={title}
        subheader={subHeader ? subHeader : ''}
      />
  </div>
);


export default NewAvatar;
