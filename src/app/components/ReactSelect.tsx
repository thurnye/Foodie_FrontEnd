import React from 'react';
import Select, { Props as SelectProps } from 'react-select';
import makeAnimated from 'react-select/animated';
import { Controller, Control } from 'react-hook-form';

// Option type
export interface SelectOption {
  label: string;
  value: string;
}

// Props interface
interface ReactSelectProps {
  name: string;
  control: Control<any>;
  options: SelectOption[];
  defaultValue?: SelectOption | SelectOption[] | null;
  selectedTag?: SelectOption | SelectOption[] | null;
  isMulti?: boolean;
}

const ReactSelect: React.FC<ReactSelectProps> = ({
  selectedTag,
  name,
  control,
  options,
  defaultValue,
  isMulti = false,
}) => {
  const animatedComponents = makeAnimated();

  return (
    <div >
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue ?? (isMulti ? [] : null)}
        render={({ field }) => (
          <Select<SelectOption, boolean>
            {...field}
            options={options}
            closeMenuOnSelect={!isMulti}
            components={animatedComponents}
            isMulti={isMulti}
            defaultValue={selectedTag ?? defaultValue}
            // react-select handles its own onChange shape
            onChange={(val) => field.onChange(val)}
            // react-hook-form expects value to match internal state
            value={field.value}
            classNamePrefix="react-select"
          />
        )}
      />
    </div>
  );
};

export default ReactSelect;
