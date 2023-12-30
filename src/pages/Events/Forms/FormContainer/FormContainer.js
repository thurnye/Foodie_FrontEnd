/* eslint-disable no-unreachable */
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import ReactSelect from '../ReactSelect/ReactSelect'

import { Box, MenuItem, Select, TextField, FormHelperText } from '@mui/material';

export function FormContainer({ defaultValues, children, onSubmit }) {
  const { handleSubmit, control, formState: { errors }, } = useForm({ defaultValues });

  const cloneChildrenWithProps = (children) => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          ...child.props,
          control,
          errors,
          children: cloneChildrenWithProps(child.props.children),
        });
      }
      return child;
    });
  };

  const clonedChildren = cloneChildrenWithProps(children);


  return (
    <Box component="main" maxWidth="xs">
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* {React.Children.map(children, (child) => {
          return React.cloneElement(child, { control, errors });
        })} */}
        {clonedChildren}
      </Box>
    </Box>
  );
}

export const Input = ({ type, control, errors, isRequired, name, label, placeholder, children, ...rest }) => (
  <Box sx={{ mb: 3 }}>
    {/* Use Controller to integrate with React Hook Form */}
    <Controller
      name={name}
      control={control}
      rules={{
        ...(isRequired && { required: `${label} is required.` }),
      }}
      render={({ field }) => (
        <>
          {/* Standard TextField input */}
          <TextField
            label={label}
            fullWidth
            type={type ? type : 'text'}
            size="small"
            placeholder={placeholder}
            {...field}
            error={errors[name] ? true : false}
          />
          {/* Display error message if there is an error */}
          {errors[name] && (
            <FormHelperText id="component-error-text" sx={{ color: '#ff604f' }}>
              {errors[name].message}
            </FormHelperText>
          )}
        </>
      )}
      />
      {/* Additional custom components passed as children */}
      {children && <Box>{children}</Box>}
  </Box>
);

export const SelectInput = ({ control, errors, options, name, label, isMulti, ...rest }) => <Box sx={{mb: 3}}>
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <Select {...field} variant="outlined" fullWidth label={label} isMulti={isMulti} {...rest}>
        {options.map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    )}
    
  />
</Box>


export const ReactSelectInput = ({ control, errors, options, name, ...rest }) => <Box sx={{mb: 3}}>
  <ReactSelect name={name} control={control} options={options} {...rest}/>
</Box>
  
