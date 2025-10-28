import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IIngredient } from '../../Recipe/types/recipe.types';

interface IngredientsListProps {
  ingredients: IIngredient[];
}

const IngredientsList: React.FC<IngredientsListProps> = ({ ingredients }) => {
  const mainIngredients = ingredients.filter((el) => el.type === 'main');
  const dressingIngredients = ingredients.filter(
    (el) => el.type === 'dressing'
  );

  const renderTable = (title: string, data: IIngredient[]) => (
    <Box sx={{ my: 4 }}>
      <Typography variant='h6' sx={{ fontWeight: 600, mb: 2 }}>
        {title}
      </Typography>

      <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
        <Table sx={{ minWidth: 350 }} aria-label={`${title} table`}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ width: '50px', borderRight: '2px solid #f0f0f0' }}
              />
              <TableCell>
                <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
                  Ingredients
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((el, i) => (
              <TableRow key={`${el.name}-${i}`}>
                <TableCell align='center'>
                  <FontAwesomeIcon icon={['far', 'circle']} />
                </TableCell>
                <TableCell>
                  <Typography variant='body2'>{el.name}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );

  return (
    <Box sx={{ py: 2 }}>
      {renderTable('Main Ingredients', mainIngredients)}
      {renderTable('For Dressing', dressingIngredients)}
    </Box>
  );
};

export default IngredientsList;
