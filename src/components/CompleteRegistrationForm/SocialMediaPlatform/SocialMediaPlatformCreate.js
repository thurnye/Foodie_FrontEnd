import React, { useEffect, useMemo } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { CiTextAlignLeft } from 'react-icons/ci';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { FormHelperText, IconButton } from '@mui/material';
import { FaTrash } from 'react-icons/fa6';
import Grid from '@mui/material/Grid';
import SortableList from '../../Dashboard/Events/Forms/SortableContainer/SortableList';
import { getRandomInt } from '../../../util/commons';

const SocialMediaPlatformCreate = ({ setData, platform, setOpen }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: useMemo(
      () =>
        platform.length > 0
          ? { platform }
          : {
              platform: [
                { name: 'Facebook', link: '' },
                { name: 'X', link: '' },
                { name: 'LinkedIn', link: '' },
                { name: 'Pinterest', link: '' },
              ],
            },
      [platform]
    ),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'platform',
  });

  const onSubmit = (data) => {
    console.log('data::', data);
    setData(data.platform);
    setOpen(false);
  };

  useEffect(() => {
    if (fields.length === 0) {
      setOpen('');
    }
  }, [fields, setOpen]);

  const addButton = () => (
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
        onClick={() => append({ name: '', link: '' })}
      >
        Add platform
      </Button>
    </Box>
  );

  return (
    <Box>
      <Box sx={{ m: 'auto', width: '100%' }}>
        {fields.map((item, index) => (
          <Box
            key={getRandomInt()}
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
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={2} sm={4} md={6}>
                  <Controller
                    name={`platform[${index}].name`}
                    control={control}
                    defaultValue={item.value}
                    rules={{
                      required: 'Please provide the name of the platform',
                    }}
                    render={({ field }) => (
                      <Box sx={{}}>
                        <TextField
                          sx={{ mt: 3 }}
                          fullWidth
                          {...field}
                          label='Name'
                          id={`platform[${index}].name`}
                          size='small'
                        />
                        {watch('platform').length > 0 &&
                          errors.platform?.[index]?.name && (
                            <FormHelperText
                              id='component-error-text'
                              sx={{ color: '#ff604f' }}
                            >
                              {errors.platform[index].name.message}
                            </FormHelperText>
                          )}
                      </Box>
                    )}
                  />
                </Grid>
                <Grid item xs={2} sm={4} md={6}>
                  <Controller
                    name={`platform[${index}].link`}
                    control={control}
                    defaultValue={item.value}
                    rules={{
                      required: 'Please provide the link to your account',
                    }}
                    render={({ field }) => (
                      <Box>
                        <TextField
                          sx={{ mt: 3 }}
                          fullWidth
                          {...field}
                          label='link'
                          type='text'
                          id={`platform[${index}].amount`}
                          size='small'
                        />
                        {watch('platform').length > 0 &&
                          errors.platform?.[index]?.amount && (
                            <FormHelperText
                              id='component-error-text'
                              sx={{ color: '#ff604f' }}
                            >
                              {errors.platform[index].amount.message}
                            </FormHelperText>
                          )}
                      </Box>
                    )}
                  />
                </Grid>
              </Grid>
            </Box>

            <Box>
              <IconButton
                aria-label='delete'
                onClick={() => remove(index)}
                sx={{ width: 27 }}
              >
                <FaTrash color='#a3a2a28a' />
              </IconButton>
            </Box>
          </Box>
        ))}
        {addButton()}
        {fields.length > 0 && (
          <>
            <hr></hr>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
                <Button onClick={() => setOpen(false)} color='error'>
                Cancel
                </Button>
              <Button onClick={handleSubmit(onSubmit)}>
                {platform?.length > 0 ? 'Update' : 'Add'}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default SocialMediaPlatformCreate;
