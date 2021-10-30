import PropTypes from 'prop-types';
import React from 'react';
import { ErrorMessage, TextInputWrapper } from './TextInputs.styled';
import { BsPerson, BsEnvelope } from 'react-icons/bs';
import { BiLock } from 'react-icons/bi';

const TextInputs = React.forwardRef((props, ref) => {
  const { label, type, name, placeholder, validation } = props;
  switch (label) {
    case 'name':
      return (
        <>
          <TextInputWrapper {...props} validation={!validation}>
            <label htmlFor={label}>
              {label.charAt(0).toUpperCase() + label.slice(1)}
            </label>
            <BsPerson />
            <input
              type={type}
              name={name}
              id={label}
              placeholder={placeholder}
              ref={ref}
            />
            {validation && (
              <ErrorMessage>
                {label.charAt(0).toUpperCase() + label.slice(1)} {validation}
              </ErrorMessage>
            )}
          </TextInputWrapper>
        </>
      );
    case 'email':
      return (
        <>
          <TextInputWrapper {...props} validation={validation}>
            <label htmlFor={label}>
              {label.charAt(0).toUpperCase() + label.slice(1)}
            </label>
            <BsEnvelope />
            <input
              type={type}
              name={name}
              id={label}
              placeholder={placeholder}
              ref={ref}
            />
            {validation && (
              <ErrorMessage>
                {label.charAt(0).toUpperCase() + label.slice(1)} {validation}
              </ErrorMessage>
            )}
          </TextInputWrapper>
        </>
      );
    case 'password':
      return (
        <>
          <TextInputWrapper {...props} validation={validation}>
            <label htmlFor={label}>
              {label.charAt(0).toUpperCase() + label.slice(1)}
            </label>
            <BiLock />
            <input
              type={type}
              name={name}
              id={label}
              placeholder={placeholder}
              ref={ref}
            />
            {validation && (
              <ErrorMessage>
                {label.charAt(0).toUpperCase() + label.slice(1)} {validation}
              </ErrorMessage>
            )}
          </TextInputWrapper>
        </>
      );
    default:
      return (
        <>
          <TextInputWrapper {...props} validation={validation}>
            <label htmlFor={label}>{label}</label>
            <input
              type={type}
              name={name}
              id={label}
              placeholder={placeholder}
              ref={ref}
            />
            {validation && (
              <ErrorMessage>
                {label.charAt(0).toUpperCase() + label.slice(1)} {validation}
              </ErrorMessage>
            )}
          </TextInputWrapper>
        </>
      );
  }
});

TextInputs.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.oneOf(['name', 'email', 'password']),
    PropTypes.string,
  ]).isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
  validation: PropTypes.string,
};

export default TextInputs;
