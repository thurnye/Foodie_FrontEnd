import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Container,
} from '@mui/material';
import { MdOutlineEdit } from 'react-icons/md';
import EastIcon from '@mui/icons-material/East';
import RecipeNutrientsAddEdit from './RecipeNutrientsAddEdit';
import NutritionalTable from './NutritionalTable';
import { INutritionalFact } from '../../../../../Recipe/types/recipe.types';

interface RecipeDetailsFormProps {
  setData: (data: INutritionalFact[]) => void;
  defaultValues: INutritionalFact[];
}

const RecipeDetailsForm: React.FC<RecipeDetailsFormProps> = ({ setData, defaultValues }) => {
  const [nutrients, setNutrients] = useState<INutritionalFact[]>(defaultValues);
  const [open, setOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const getEditIcons = () => (
    <Box sx={{ position: 'absolute', top: 6, right: 6 }}>
      <Card
        sx={{
          width: 25,
          height: 25,
          borderRadius: '50%',
          textAlign: 'center',
          background: '#E9EDFC',
          cursor: 'pointer',
        }}
        onClick={() => setOpen(true)}
      >
        <Typography>
          <MdOutlineEdit color="#3559E3" />
        </Typography>
      </Card>
    </Box>
  );

  const onSubmit = () => {
    if (nutrients.length === 0) {
      setIsError(true);
      return;
    }
    setData(nutrients);
  };

  return (
    <Container>
      <Box sx={{ mb: 2 }}>
        {!open ? (
          <Box onClick={() => nutrients?.length === 0 && setOpen(true)}>
            <Card onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              {isHovered && getEditIcons()}
              <CardContent>
                {nutrients.length === 0 ? (
                  <Box
                    sx={{
                      width: '100%',
                      height: '50vh',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      border: 'none',
                      boxShadow: 'none',
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" color="text.secondary" textAlign="center">
                        No Nutrient Added!
                      </Typography>
                      <Typography variant="caption" color="text.secondary" textAlign="center">
                        Click to add nutrients
                      </Typography>
                      {isError && (
                        <Typography
                          variant="caption"
                          color="salmon"
                          textAlign="center"
                          sx={{ display: 'block', mt: 1 }}
                        >
                          *Nutrients are required!
                        </Typography>
                      )}
                    </CardContent>
                  </Box>
                ) : (
                  <>
                    <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                      Nutrients
                    </Typography>
                    <NutritionalTable data={nutrients} />
                  </>
                )}
              </CardContent>
            </Card>
          </Box>
        ) : (
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Add Nutrients Here!
              </Typography>
              {isError && (
                <Typography variant="caption" color="salmon" sx={{ mb: 3, display: 'block' }}>
                  *Nutrients are required!
                </Typography>
              )}
              <RecipeNutrientsAddEdit
                setData={setNutrients}
                nutrients={nutrients}
                setOpen={setOpen}
              />
            </CardContent>
          </Card>
        )}
      </Box>

      <Box sx={{ mt: 10, textAlign: 'end' }}>
        <Button variant="text" endIcon={<EastIcon />} onClick={onSubmit}>
          Continue
        </Button>
      </Box>
    </Container>
  );
};

export default RecipeDetailsForm;
