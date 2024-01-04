/* eslint-disable no-unreachable */
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import ReactSelect from '../ReactSelect/ReactSelect';
import GoogleLocation from '../../../../components/GoogleMapLocation/GoogleLocation/GoogleLocation';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


import { Box, MenuItem, Select, TextField, FormHelperText } from '@mui/material';

export function FormContainer({ defaultValues, children, onSubmit }) {
  const { handleSubmit, control, formState: { errors }, setValue} = useForm({ defaultValues });

  const cloneChildrenWithProps = (children) => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          ...child.props,
          control,
          errors,
          setValue,
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
        {clonedChildren}
      </Box>
    </Box>
  );
}

export const Input = ({ type, control, errors, isRequired, name, label, placeholder, children, errorMessage, defaultValue, ...rest }) => (
  <Box sx={{ mb: 3 }}>
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{
        ...(isRequired && { required: errorMessage ? errorMessage : `${label} is required.` }),
      }}
      render={({ field }) => (
        <>
          <TextField
            {...field}
            label={label}
            fullWidth
            type={type ? type : 'text'}
            size="small"
            placeholder={placeholder}
            defaultValue={defaultValue}
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


export const LocationInput = ({ setValue, control, errors, isRequired, name, label, defaultValue, children, errorMessage, isLoaded, ...rest }) => (
  <Box sx={{ mb: 3}}>
    <Controller
      name={name}
      control={control}
      rules={{
        ...(isRequired && { required: errorMessage ? errorMessage : `${label} is required.` }),
      }}
      render={({ field }) => (
        <>
          <GoogleLocation
            fieldName={name} 
            isLoaded={isLoaded} 
            setValue={setValue}
            control={control} 
            defaultValue={defaultValue}
          />
          {errors[name] && (
            <FormHelperText id="component-error-text" sx={{ color: '#ff604f' }}>
              {errors[name].message}
            </FormHelperText>
          )}
        </>
      )}
    />
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


export const DateAndTimeInput = ({ control, errors, name, defaultValue, minDate, label, isRequired, errorMessage, }) => <Box sx={{mb: 3}}>
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={{
          ...(isRequired && { required: errorMessage ? errorMessage : `${label} is required.` }),
        }}
        render={({ field }) => (
          <DateTimePicker
            {...field}
            label={label}
            fullWidth
            margin="small"
            id="date-picker"
            value={field.value}
            onChange={(date) => field.onChange(date)}
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
            }}
            minDate={minDate}
            error={!!errors.starts}
            helperText={errors.starts?.message}
          />
        )}
      />
    </DemoContainer>
  </LocalizationProvider>
  {errors[name] && 
    <FormHelperText id="component-error-text" sx={{ color: '#ff604f' }}>
      {errors[name].message}
    </FormHelperText>
  }
</Box>


export const CheckBoxField = ({ control, name, defaultChecked, label }) => <Box sx={{mb: 3}}>
  <Controller
      name={name}
      control={control}
      defaultValue={defaultChecked}
      render={({ field }) => (
        <FormControlLabel
          control={<Checkbox {...field} defaultChecked={defaultChecked}/>}
          label={label}
        />
      )}
    />
</Box>


  
