import React, { useEffect, useMemo } from 'react';
import {
  Box,
  TextField,
  Button,
  FormHelperText,
  IconButton,
  Grid,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import { CiTextAlignLeft } from 'react-icons/ci';
import { FaTrash } from 'react-icons/fa6';
import { useForm, Controller, useFieldArray } from 'react-hook-form';

import SortableList, { SortableItemData } from '../../../../SortableList';
import { getRandomNumber } from '../../../../../../app/utils/app.utils';
import { measurementUnits } from '../../../../../../shared/data/shared.recipe.optionsData';
import { INutritionalFact } from '../../../../../Recipe/types/recipe.types';

//  Props and form types
interface RecipeNutrientsAddEditProps {
  setData: (data: INutritionalFact[]) => void;
  nutrients: INutritionalFact[];
  setOpen: (open: boolean) => void;
}

interface NutrientsForm {
  nutrients: INutritionalFact[];
}

const RecipeNutrientsAddEdit: React.FC<RecipeNutrientsAddEditProps> = ({
  setData,
  nutrients,
  setOpen,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<NutrientsForm>({
    defaultValues: useMemo(
      () =>
        nutrients.length > 0
          ? { nutrients }
          : { nutrients: [{ name: '', amount: '', unit: 'g' }] },
      [nutrients]
    ),
  });

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: 'nutrients',
  });

  const onSubmit = (data: NutrientsForm) => {
    setData(data.nutrients);
    setOpen(false);
  };

  useEffect(() => {
    if (fields.length === 0) {
      setOpen(false);
    }
  }, [fields, setOpen]);

  const addButton = (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: {
          xs: 'center',
          sm: fields.length === 0 ? 'flex-end' : 'space-between',
        },
        alignItems: 'center',
      }}
    >
      <Button
        variant='text'
        startIcon={<CiTextAlignLeft />}
        sx={{ mb: { xs: 2, sm: 0 }, textTransform: 'none' }}
        onClick={() => append({ name: '', amount: '', unit: 'g' })}
      >
        Add Nutrient
      </Button>
    </Box>
  );

  const items: SortableItemData[] = fields.map((item, index) => ({
    id: getRandomNumber().toString(),
    content: (
      <Box
        key={item.id}
        sx={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          pb: 3,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {/* Name */}
            <Grid item xs={12} sm={4}>
              <Controller
                name={`nutrients.${index}.name`}
                control={control}
                rules={{ required: 'Nutrient name is required' }}
                render={({ field }) => (
                  <Box>
                    <TextField
                      {...field}
                      label='Nutrient'
                      size='small'
                      fullWidth
                      sx={{ mt: 3 }}
                    />
                    {errors.nutrients?.[index]?.name && (
                      <FormHelperText sx={{ color: '#ff604f' }}>
                        {errors.nutrients[index].name?.message}
                      </FormHelperText>
                    )}
                  </Box>
                )}
              />
            </Grid>

            {/* Amount */}
            <Grid item xs={12} sm={4}>
              <Controller
                name={`nutrients.${index}.amount`}
                control={control}
                rules={{ required: 'Amount is required' }}
                render={({ field }) => (
                  <Box>
                    <TextField
                      {...field}
                      label='Amount'
                      type='number'
                      size='small'
                      fullWidth
                      sx={{ mt: 3 }}
                    />
                    {errors.nutrients?.[index]?.amount && (
                      <FormHelperText sx={{ color: '#ff604f' }}>
                        {errors.nutrients[index].amount?.message}
                      </FormHelperText>
                    )}
                  </Box>
                )}
              />
            </Grid>

            {/* Unit */}
            <Grid item xs={12} sm={4}>
              <Controller
                name={`nutrients.${index}.unit`}
                control={control}
                rules={{ required: 'Unit is required' }}
                render={({ field }) => (
                  <FormControl fullWidth sx={{ mt: 3 }}>
                    <Select {...field} size='small'>
                      {measurementUnits.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.nutrients?.[index]?.unit && (
                      <FormHelperText sx={{ color: '#ff604f' }}>
                        {errors.nutrients[index].unit?.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                )}
              />
            </Grid>
          </Grid>
        </Box>

        <IconButton
          aria-label='delete'
          onClick={() => remove(index)}
          sx={{ width: 27 }}
        >
          <FaTrash color='#a3a2a28a' />
        </IconButton>
      </Box>
    ),
  }));

  return (
    <Box>
      <Box sx={{ m: 'auto', width: '100%' }}>
        <SortableList move={move} items={items} />
        {addButton}
        {fields.length > 0 && (
          <>
            <hr />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <Button onClick={handleSubmit(onSubmit)}>
                {nutrients?.length > 0 ? 'Update' : 'Add'}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default RecipeNutrientsAddEdit;
