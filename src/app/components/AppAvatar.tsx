import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

// Define prop types
interface NewAvatarProps {
  title: string;
  image?: string;
  subHeader?: string;
  id?: string;
}

const AppAvatar: React.FC<NewAvatarProps> = ({ title, image, subHeader, id }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (id) {
      navigate('/author', { state: { authorId: id } });
    }
  };

  return (
    <div>
      <CardHeader
        sx={{
          cursor: id ? 'pointer' : 'default',
          width: 'fit-content',
        }}
        onClick={handleNavigate}
        avatar={<Avatar alt={title} src={image} />}
        title={title}
        subheader={subHeader || ''}
      />
    </div>
  );
};

export default AppAvatar;
