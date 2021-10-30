import { BrandLogo, Illustration } from '../../assets';
import Button from '../Button/Button';
import {
  RegistrationFormLeft,
  RegistrationFormRight,
  RegistrationFormWrapper,
  RegRightBottom,
  RegRightTop,
  Seperator,
} from './Form.styled';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

import Form from './Form';

const RegistrationForm = () => {
  return (
    <RegistrationFormWrapper>
      <RegistrationFormLeft>
        <BrandLogo />
        <Illustration />
        <div>
          Start for free & Get <span>Attractive offers Today !</span>
        </div>
      </RegistrationFormLeft>
      <RegistrationFormRight>
        <RegRightTop>
          <h1>Get Started</h1>
          <p>Already have an account</p>
          <span>Log in</span>
          <div>
            <Button text='sign up' google icon={<FcGoogle />} />
            <Button text='sign up' facebook icon={<FaFacebook />} />
          </div>
        </RegRightTop>
        <Seperator>Or</Seperator>
        <RegRightBottom>
          <Form />
        </RegRightBottom>
      </RegistrationFormRight>
    </RegistrationFormWrapper>
  );
};

export default RegistrationForm;
