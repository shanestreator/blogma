import React from 'react'

const TextAreaFieldGroup = ({
  name,
  label,
  placeholder,
  value,
  error,
  info,
  onChange
}) => {
  return (
    <div className="form-group mb-0">
      {label && <label htmlFor={label}>{label}</label>}
      <textarea
        className={
          error
            ? 'form-control form-control is-invalid'
            : 'form-control form-control'
        }
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        style={{ height: '400px' }}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

export default TextAreaFieldGroup
