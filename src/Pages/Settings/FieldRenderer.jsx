import React from 'react'
import { Input } from '../../UI/Input'
import { Select } from '../../UI/Select'
import { Desc } from '../../UI/Desc'

export const FieldRenderer = ({ field, value, onChange, disabled, error, isEditing }) => {
  const commonProps = {
    value: value || '',
    onChange: (val) => onChange(field.name, val),
    disabled: disabled,
    borderColor: isEditing ? (error ? 'border-red-500' : 'border-[#60efdb]') : 'border-gray-300',
    focusColor: error ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50',
    error: error
  }

  switch (field.type) {
    case 'select':
      return (
        <Select
          label={field.label}
          options={field.options}
          {...commonProps}
        />
      )
    case 'textarea':
      return (
        <Desc
          nameDesc={field.label}
          holderDesc={field.placeholder || ''}
          name={field.name}
          {...commonProps}
        />
      )
    default:
      return (
        <Input
          iType={field.type}
          labelTitle={field.label}
          iHolder={field.placeholder || ''}
          {...commonProps}
        />
      )
  }
}