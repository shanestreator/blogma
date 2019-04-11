import React from 'react'

const TextFieldGroup = ({
  name,
  label,
  placeholder,
  value,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group mb-0">
      {label && <label htmlFor={label}>{label}</label>}
      <input
        type={type}
        className={
          error
            ? 'form-control form-control is-invalid'
            : 'form-control form-control'
        }
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

export default TextFieldGroup
