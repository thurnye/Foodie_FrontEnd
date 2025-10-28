import { ReactNode } from "react";
import { Control, FieldErrors, UseFormSetValue } from "react-hook-form";

export interface InputFieldProps {
  type?: string;
  max?: number;
  min?: number;
  size?: 'small' | 'medium';
  control: Control<any>;
  errors: FieldErrors;
  maxLength?: number;
  isRequired?: boolean;
  name: string;
  label?: string;
  placeholder?: string;
  children?: ReactNode;
  errorMessage?: string;
  defaultValue?: any;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectInputProps {
  control: Control<any>;
  errors: FieldErrors;
  options: SelectOption[];
  name: string;
  disabled?: boolean;
  label: string;
  isMulti?: boolean;
  defaultValue?: any;
  isRequired?: boolean;
  errorMessage?: string;
}

export interface LocationInputProps {
  setValue: UseFormSetValue<any>;
  control: Control<any>;
  errors: FieldErrors;
  isRequired?: boolean;
  name: string;
  label: string;
  defaultValue?: any;
  children?: ReactNode;
  errorMessage?: string;
  isLoaded?: boolean;
}

