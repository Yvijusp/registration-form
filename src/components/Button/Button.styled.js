import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  padding: 10px 60px;
  background-color: ${({ google, facebook }) =>
    google ? `#FFFFFF` : facebook ? '#4F70B5' : 'white'};

  color: ${({ google, facebook }) =>
    google ? `#00` : facebook ? '#FFFFFF' : 'white'};

  border: none;
  outline: none;
  cursor: pointer;

  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;

  font-size: 14px;

  svg {
    margin-right: 8px;
    font-size: 16px;
  }
`;
