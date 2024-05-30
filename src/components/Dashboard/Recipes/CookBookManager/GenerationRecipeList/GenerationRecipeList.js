import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import {getRandomInt} from '../../../../../util/commons'
import { useEffect } from 'react';

export default function GenerationRecipeList({ listItems, setRecipeIds, recipeIds }) {
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    setRecipeIds(newChecked);
  };

  useEffect(() => setChecked(recipeIds), [recipeIds])

  return (
    <Box>
      
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          // height: { xs: 'initial', lg: '70vh' },
          // overflow: 'auto',
        }}
      >
        {listItems?.map((item) => {
          const labelId = `checkbox-list-label-${item._id}`;

          return (
            <ListItem key={getRandomInt()}>
              <ListItemButton
                role={undefined}
                onClick={handleToggle(item._id)}
                sx={{ pt: 2 }}
              >
                <ListItemIcon>
                  <Checkbox
                    edge='start'
                    checked={checked.indexOf(item._id) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <Box sx={{ flexGrow: 1 }}>
                  <Box sx={{ height: 100 }}>
                    <CardMedia
                      component='img'
                      height='100'
                      image={item.details.thumbnail}
                      alt={item.basicInfo.recipeName}
                    />
                  </Box>
                  <ListItemText
                    id={labelId}
                    primary={item.basicInfo.recipeName}
                  />
                </Box>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
