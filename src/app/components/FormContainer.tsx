/* eslint-disable no-unreachable */
import React, { ReactNode } from 'react';
import {
  useForm,
  Controller,
  Control,
  FieldErrors,
  UseFormSetValue,
} from 'react-hook-form';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import { Typography, Card, CardContent } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { LiaCameraRetroSolid } from 'react-icons/lia';
import Dropzone from 'react-dropzone';
import {
  Box,
  MenuItem,
  Select,
  TextField,
  FormHelperText,
} from '@mui/material';
import TextEditor from './TextEditor';
import { convertToBase64 } from '../utils/app.utils';
import DateRangePicker from './DateRangePicker';
import GoogleLocation from '../services/app.GeoLocation.service';
import ReactSelect from './ReactSelect';
import { IValueLabel } from '../../features/Recipe/types/recipe.types';

// ----------------------
// Shared types
// ----------------------
interface CommonFieldProps {
  control?: Control<any>;
  errors?: FieldErrors;
  name: string;
  label?: string;
  isRequired?: boolean;
  errorMessage?: string;
  defaultValue?: any;
  children?: ReactNode;
  placeholder?: string;
}



// ----------------------
// FormContainer
// ----------------------
interface FormContainerProps {
  defaultValues: Record<string, any>;
  children: ReactNode;
  onSubmit: (data: any) => void;
  fieldArrayName?: string;
}

export function FormContainer({
  defaultValues,
  children,
  onSubmit,
}: FormContainerProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({ defaultValues });

  const cloneChildrenWithProps = (childNodes: ReactNode): ReactNode => {
    return React.Children.map(childNodes, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          ...(child.props as any),
          control,
          errors,
          setValue,
          children: cloneChildrenWithProps((child.props as any).children),
        });
      }
      return child;
    });
  };

  const clonedChildren = cloneChildrenWithProps(children);

  return (
    <Box component='main' maxWidth='xs'>
      <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate>
        {clonedChildren}
      </Box>
    </Box>
  );
}

// ----------------------
// Input Field
// ----------------------
interface InputProps extends CommonFieldProps {
  type?: string;
  size?: 'small' | 'medium';
  placeholder?: string;
  maxLength?: number;
  max?: number;
  min?: number;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  control,
  size = 'small',
  errors,
  name,
  label,
  placeholder,
  maxLength,
  max,
  min,
  isRequired,
  errorMessage,
  defaultValue,
  children,
}) => (
  <Box sx={{ mb: 3 }}>
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ?? ''}
      rules={{
        ...(isRequired && {
          required: errorMessage || `${label} is required.`,
        }),
      }}
      render={({ field }) => (
        <Box sx={{ position: 'relative' }}>
          <TextField
            {...field}
            label={label}
            fullWidth
            type={type}
            size={size}
            placeholder={placeholder}
            error={!!(errors && errors[name])}
            inputProps={{
              ...(maxLength && { maxLength }),
              ...(type === 'number' && max ? { max } : {}),
              ...(type === 'number' && min ? { min } : {}),
            }}
          />
          {maxLength && (
            <FormHelperText
              sx={{ color: 'text.secondary', position: 'absolute', right: 0 }}
            >
              {`${field.value?.length ?? 0}/${maxLength}`}
            </FormHelperText>
          )}
          {errors && errors[name] && (
            <FormHelperText sx={{ color: '#ff604f' }}>
              {(errors[name] as any)?.message}
            </FormHelperText>
          )}
        </Box>
      )}
    />
    {children && <Box>{children}</Box>}
  </Box>
);

// ----------------------
// TextArea
// ----------------------
export const TextArea: React.FC<InputProps> = (props) => (
  <Input {...props} type='textarea' />
);

// ----------------------
// Amount Input
// ----------------------
interface AmountInputProps extends CommonFieldProps {
  disabled?: boolean;
  symbol?: string;
}

export const AmountInput: React.FC<AmountInputProps> = ({
  control,
  errors,
  name,
  label,
  placeholder,
  disabled,
  isRequired,
  errorMessage,
  defaultValue,
}) => (
  <Box sx={{ mb: 3 }}>
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ?? 0}
      rules={{
        ...(isRequired && {
          required: errorMessage || `${label} is required.`,
        }),
      }}
      render={({ field }) => (
        <TextField
          {...field}
          type='number'
          fullWidth
          label={label}
          disabled={disabled}
          placeholder={placeholder}
          error={!!(errors && errors[name])}
        />
      )}
    />
    {errors && errors[name] && (
      <FormHelperText sx={{ color: '#ff604f' }}>
        {(errors[name] as any)?.message}
      </FormHelperText>
    )}
  </Box>
);

// ----------------------
// Editor (TinyMCE)
// ----------------------
export const Editor: React.FC<CommonFieldProps> = ({
  control,
  errors,
  name,
  label,
  isRequired,
  errorMessage,
  defaultValue,
}) => (
  <Box sx={{ mb: 3 }}>
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ?? ''}
      rules={{
        ...(isRequired && {
          required: errorMessage || `${label} is required.`,
        }),
      }}
      render={({ field }) => (
        <>
          <TextEditor getContents={field.onChange} defaultValue={field.value} />
          {errors && errors[name] && (
            <FormHelperText sx={{ color: '#ff604f' }}>
              {(errors[name] as any)?.message}
            </FormHelperText>
          )}
        </>
      )}
    />
  </Box>
);

// ----------------------
// InputImage
// ----------------------
export const InputImage: React.FC<CommonFieldProps> = ({
  control,
  errors,
  name,
  isRequired,
  errorMessage,
}) => (
  <Box sx={{ mb: 3 }}>
    <Controller
      name={name}
      control={control}
      defaultValue=''
      rules={{
        ...(isRequired && { required: errorMessage || `Image is required.` }),
      }}
      render={({ field }) => (
        <Dropzone
          multiple={false}
          onDrop={async (acceptedFiles) => {
            field.onChange(await convertToBase64(acceptedFiles[0]));
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {!field.value ? (
                <Card sx={{ maxHeight: 250 }}>
                  <CardContent>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant='h3' sx={{ mb: 1 }}>
                        <LiaCameraRetroSolid />
                      </Typography>
                      <Typography sx={{ mb: 1, color: '#05A8F2' }}>
                        ADD AN IMAGE
                      </Typography>
                      <Typography variant='caption' color='text.secondary'>
                        Choose a beautiful image that perfectly captures your
                        recipe.
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent>
                    <img
                      src={field.value}
                      className='card-img'
                      alt='uploaded'
                    />
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </Dropzone>
      )}
    />
    {errors && errors[name] && (
      <FormHelperText sx={{ color: '#ff604f' }}>
        {(errors[name] as any)?.message}
      </FormHelperText>
    )}
  </Box>
);

// ----------------------
// Location Input
// ----------------------
interface LocationInputProps extends CommonFieldProps {
  isLoaded: boolean;
  setValue: UseFormSetValue<any>;
}

export const LocationInput: React.FC<LocationInputProps> = ({
  control,
  errors,
  name,
  label,
  defaultValue,
  isLoaded,
  setValue,
}) => (
  <Box sx={{ mb: 3 }}>
    <Controller
      name={name}
      control={control}
      render={() => (
        <>
          <GoogleLocation
            fieldName={name}
            isLoaded={isLoaded}
            setValue={setValue}
            control={control}
            defaultValue={defaultValue}
            label={label}
          />
          {errors && errors[name] && (
            <FormHelperText sx={{ color: '#ff604f' }}>
              {(errors[name] as any)?.message}
            </FormHelperText>
          )}
        </>
      )}
    />
  </Box>
);

// ----------------------
// Select Input
// ----------------------
interface SelectInputProps extends CommonFieldProps {
  options: IValueLabel[];
  disabled?: boolean;
  isMulti?: boolean;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  control,
  errors,
  options,
  name,
  disabled,
  label,
  defaultValue,
}) => (
  <Box sx={{ mb: 3 }}>
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ?? ''}
      render={({ field }) => (
        <>
          <FormControl fullWidth disabled={disabled}>
            <InputLabel>{label}</InputLabel>
            <Select {...field} label={label}>
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {errors && errors[name] && (
            <FormHelperText sx={{ color: '#ff604f' }}>
              {(errors[name] as any)?.message}
            </FormHelperText>
          )}
        </>
      )}
    />
  </Box>
);

// ----------------------
// ReactSelectInput
// ----------------------
interface ReactSelectInputProps extends CommonFieldProps {
  options: IValueLabel[];
  isMulti: boolean;
}

export const ReactSelectInput: React.FC<ReactSelectInputProps> = ({
  control,
  errors,
  name,
  label,
  placeholder,
  options,
  isMulti
}) => {
  if (!control) return null;

  return (
    <Box sx={{ mb: 3 }}>
      <ReactSelect
        name={name}
        control={control}
        options={options}
        isMulti={isMulti}
      />
      {errors && errors[name] && (
        <FormHelperText sx={{ color: '#ff604f' }}>
          {(errors[name] as any)?.message}
        </FormHelperText>
      )}
    </Box>
  );
};

// ----------------------
// DateTime + Range + Time Inputs
// ----------------------
export const DateAndTimeInput: React.FC<
  CommonFieldProps & { minDate?: Date }
> = ({
  control,
  errors,
  name,
  label,
  isRequired,
  errorMessage,
  defaultValue,
  minDate,
}) => (
  <Box sx={{ mb: 3 }}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DemoContainer components={['DateTimePicker']}>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          rules={{
            ...(isRequired && {
              required: errorMessage || `${label} is required.`,
            }),
          }}
          render={({ field }) => (
            <DateTimePicker
              {...field}
              label={label}
              value={field.value}
              onChange={(date) => field.onChange(date)}
              viewRenderers={{
                hours: renderTimeViewClock,
                minutes: renderTimeViewClock,
              }}
              minDate={minDate}
            />
          )}
        />
      </DemoContainer>
    </LocalizationProvider>
    {errors && errors[name] && (
      <FormHelperText sx={{ color: '#ff604f' }}>
        {(errors[name] as any)?.message}
      </FormHelperText>
    )}
  </Box>
);

export const TimeInput: React.FC<CommonFieldProps> = ({
  control,
  errors,
  name,
  label,
}) => (
  <Box sx={{ mb: 3 }}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DemoContainer components={['MobileTimePicker']}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <MobileTimePicker
              {...field}
              label={label}
              value={field.value}
              onChange={(date) => field.onChange(date)}
              viewRenderers={{
                hours: renderTimeViewClock,
                minutes: renderTimeViewClock,
              }}
            />
          )}
        />
      </DemoContainer>
    </LocalizationProvider>
    {errors && errors[name] && (
      <FormHelperText sx={{ color: '#ff604f' }}>
        {(errors[name] as any)?.message}
      </FormHelperText>
    )}
  </Box>
);

export const DateTimeRange: React.FC<
  CommonFieldProps & { defaultDates?: any }
> = ({ control, errors, name, label, defaultValue }) => (
  <Box sx={{ mb: 3 }}>
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <DateRangePicker
          buttonText={label}
          onChange={(range) => field.onChange(range)}
          onSubmit={(range) => field.onChange(range)}
          onCloseCallback={() => field.onBlur()}
          defaultDate={field.value}
        />
      )}
    />
    {errors && errors[name] && (
      <FormHelperText sx={{ color: '#ff604f' }}>
        {(errors[name] as any)?.message}
      </FormHelperText>
    )}
  </Box>
);

// ----------------------
// Checkbox
// ----------------------
interface CheckBoxFieldProps {
  control: Control<any>;
  name: string;
  defaultChecked?: boolean;
  label: string;
}

export const CheckBoxField: React.FC<CheckBoxFieldProps> = ({
  control,
  name,
  defaultChecked,
  label,
}) => (
  <Box sx={{ mb: 3 }}>
    <Controller
      name={name}
      control={control}
      defaultValue={defaultChecked}
      render={({ field }) => (
        <FormControlLabel control={<Checkbox {...field} />} label={label} />
      )}
    />
  </Box>
);
