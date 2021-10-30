import styled from 'styled-components';

export const RegistrationFormWrapper = styled.section`
  display: flex;
`;

export const RegistrationFormLeft = styled.div`
  background-color: var(--primary-color);
  padding: 25px;
  border-radius: 15px 0 0 15px;
  border: 2px solid var(--primary-color);
  display: flex;
  flex-direction: column;

  div {
    padding: 0 50px;
    text-align: center;
    color: #fff;
    span {
      display: block;
    }
  }
`;

export const RegistrationFormRight = styled.div`
  padding: 60px 50px;
  border-radius: 0 15px 15px 0;
  border: 2px solid var(--primary-color);
  width: 534px;
  background-color: #fff;
`;

export const RegRightTop = styled.div`
  h1 {
    font-size: 34px;
  }
  p {
    font-size: 14px;
    opacity: 0.8;
  }
  span {
    color: var(--primary-color);
    font-size: 14px;
  }

  div {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
`;

export const RegRightBottom = styled.div``;

export const Seperator = styled.div`
  display: flex;
  justify-content: center;

  font-size: 24px;

  margin: 30px 0 20px 0;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  gap: 15px;

  input[type='submit'] {
    margin-top: 20px;
  }
`;
