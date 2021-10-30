import { useState } from 'react';
import Validation from '../Validation/Validation';
import { FormWrapper } from './Form.styled';
import SubmitInput from './FormElements/SubmitInput';
import TextInputs from './FormElements/TextInputs';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <FormWrapper>
      <Validation
        render={(validate) => {
          const validation = validate(name);
          return (
            <TextInputs
              label='name'
              placeholder='Joey Shaheb'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              validation={validation}
            />
          );
        }}
      />
      <Validation
        render={(validate) => {
          const validation = validate(name);
          return (
            <TextInputs
              label='email'
              placeholder='abc@gmail.com'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              validation={validation}
            />
          );
        }}
      />
      <Validation
        render={(validate) => {
          const validation = validate(name);
          return (
            <TextInputs
              label='password'
              placeholder='*******'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              validation={validation}
            />
          );
        }}
      />

      <SubmitInput text='Submit' />
    </FormWrapper>
  );
};

export default Form;
