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
  Divider,
  Paper,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ---- Types ----
interface Ingredient {
  name: string;
  type: 'main' | string;
}

interface IngredientsListProps {
  ingredients: Ingredient[];
}

// ---- Component ----
const IngredientsList: React.FC<IngredientsListProps> = ({ ingredients }) => {
  const mainIngredients = ingredients.filter((el) => el.type === 'main');
  const dressingIngredients = ingredients.filter((el) => el.type !== 'main');

  const renderTable = (title: string, items: Ingredient[]) => (
    <Box sx={{ my: 5 }}>
      <Typography
        variant='h5'
        sx={{
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: 500,
          mb: 2,
        }}
      >
        {title}
      </Typography>

      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          border: '1px solid #dee2e6',
          borderRadius: 1,
          overflow: 'hidden',
        }}
      >
        <Table size='small'>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: 50, borderRight: '2px solid #dee2e6' }} />
              <TableCell>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    fontSize: '1rem',
                    fontWeight: 500,
                  }}
                >
                  Ingredients
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {items.map((el, index) => (
              <TableRow key={`table_body_ingredient_list_${index}`}>
                <TableCell
                  sx={{
                    width: 50,
                    pr: 0,
                    borderRight: '2px solid #dee2e6',
                    textAlign: 'center',
                  }}
                >
                  <FontAwesomeIcon icon={['far', 'circle']} />
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    color: 'text.primary',
                  }}
                >
                  {el.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );

  return (
    <Box>
      {renderTable('Main Ingredients', mainIngredients)}
      {dressingIngredients.length > 0 && (
        <>
          <Divider sx={{ my: 3 }} />
          {renderTable('For Dressing', dressingIngredients)}
        </>
      )}
    </Box>
  );
};

export default IngredientsList;
