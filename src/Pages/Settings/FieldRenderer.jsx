import React from 'react';
import { Input } from '../../UI/Input';
import { Select } from '../../UI/Select';
import { Desc } from '../../UI/Desc';

export const FieldRenderer = ({ field, value, onChange, disabled, error }) => {
  switch (field.type) {
    case 'select':
      return (
        <Select
          label={field.label}
          value={value}
          onChange={(val) => onChange(field.name, val)}
          options={field.options}
          disabled={disabled}
          borderColor={error ? 'border-red-500' : 'border-[#60efdb]'}
          focusColor={error ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
          error={error}
        />
      );
    case 'textarea':
      return (
        <Desc
          nameDesc={field.label}
          holderDesc={field.placeholder || ''}
          name={field.name}
          value={value}
          onChange={(e) => onChange(field.name, e.target.value)}
          disabled={disabled}
          borderColor={error ? 'border-red-500' : 'border-[#60efdb]'}
        />
      );
    default:
      return (
        <Input
          iType={field.type}
          iValue={value}
          iName={field.name}
          iChange={(e) => onChange(field.name, e.target.value)}
          labelTitle={field.label}
          iHolder={field.placeholder || ''}
          disabled={disabled}
          borderColor={error ? 'border-red-500' : 'border-[#60efdb]'}
          focusColor={error ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
          error={error}
        />
      );
  }
};