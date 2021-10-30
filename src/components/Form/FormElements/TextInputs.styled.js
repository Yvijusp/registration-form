import styled from 'styled-components';

export const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    margin-bottom: 5px;
  }

  input {
    padding: 8px 35px;
    outline: none;
    border: none;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.6);

    :focus,
    :active,
    :hover {
      box-shadow: 0 0 3px 1px
        ${({ validation }) => (validation ? '#4BB543e6' : '#ff3333')};
    }
  }

  svg {
    position: absolute;
    top: 35px;
    font-size: 25px;
    left: 5px;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 14px;
  color: red;
  margin-top: 4px;
`;
