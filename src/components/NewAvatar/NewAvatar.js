import React from 'react';
import styles from './NewAvatar.module.css';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router';

const NewAvatar = ({ title, image, subHeader, id }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.NewAvatar}>
      <CardHeader
        sx={{
          cursor: 'pointer'
        }}
        onClick={() =>
          id &&
          navigate(`/author`, {
            state: { authorId: id },
          })
        }
        avatar={<Avatar alt={title} src={image} />}
        title={title}
        subheader={subHeader ? subHeader : ''}
      />
    </div>
  );
};

export default NewAvatar;
