import React, { useEffect, useMemo } from 'react';
import {
  Box,
  Button,
  TextField,
  FormHelperText,
  FormControl,
  Select,
  MenuItem,
  IconButton,
  Grid,
} from '@mui/material';
import { CiTextAlignLeft } from 'react-icons/ci';
import { FaTrash } from 'react-icons/fa6';
import { useForm, Controller, useFieldArray } from 'react-hook-form';

import SortableList from '../../../../SortableList';
import { getRandomNumber } from '../../../../../../app/utils/app.utils';
import { IIngredient } from '../../../../../Recipe/types/recipe.types';

interface Props {
  setData: (data: IIngredient[]) => void;
  ingredients: IIngredient[];
  setOpen: (section: string) => void;
}

const ingredientTypes = [
  { label: 'Main', value: 'main' },
  { label: 'Dressing', value: 'dressing' },
];

const IngredientsAndDressingForm: React.FC<Props> = ({
  setData,
  ingredients,
  setOpen,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ ingredients: IIngredient[] }>({
    defaultValues: useMemo(() => ({ ingredients }), [ingredients]),
  });

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: 'ingredients',
  });

  const onSubmit = (data: { ingredients: IIngredient[] }) => {
    setData(data.ingredients);
    setOpen('');
  };

  useEffect(() => {
    if (fields.length === 0 && ingredients.length > 0) {
      setOpen('');
    }
  }, [fields.length, ingredients.length, setOpen]);

  return (
    <Box>
      <SortableList
        move={move}
        items={fields.map((item, index) => ({
          id: getRandomNumber().toString(),
          content: (
            <Grid container spacing={2} key={item.id}>
              <Grid item xs={6}>
                <Controller
                  name={`ingredients.${index}.name`}
                  control={control}
                  rules={{ required: 'Ingredient name is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='Ingredient Name'
                      size='small'
                      sx={{ mt: 2 }}
                    />
                  )}
                />
                {errors.ingredients?.[index]?.name && (
                  <FormHelperText sx={{ color: 'salmon' }}>
                    {errors.ingredients[index].name?.message}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={5}>
                <Controller
                  name={`ingredients.${index}.type`}
                  control={control}
                  rules={{ required: 'Type is required' }}
                  render={({ field }) => (
                    <FormControl fullWidth sx={{ mt: 2 }}>
                      <Select {...field} size='small'>
                        {ingredientTypes.map((opt) => (
                          <MenuItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                />
              </Grid>
              <Grid item xs={1} sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={() => remove(index)}>
                  <FaTrash color='#a3a2a28a' />
                </IconButton>
              </Grid>
            </Grid>
          ),
        }))}
        // onSortEnd={({ oldIndex, newIndex }) => move(oldIndex, newIndex)}
      />
      <Button
        startIcon={<CiTextAlignLeft />}
        onClick={() => append({ name: '', type: 'main' })}
      >
        Add Ingredient
      </Button>
      {fields.length > 0 && (
        <Box sx={{ textAlign: 'end', mt: 2 }}>
          <Button onClick={handleSubmit(onSubmit)}>Save</Button>
        </Box>
      )}
    </Box>
  );
};

export default IngredientsAndDressingForm;
