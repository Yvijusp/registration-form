import { useState } from 'react';
import Validation from '../Validation/Validation';
import { FormWrapper } from './Form.styled';
import SubmitInput from './FormElements/SubmitInput';
import TextInputs from './FormElements/TextInputs';

const Form = () => {
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const submitHandler = (e) => {
    e.preventDefault();

    if (name === undefined) setName('');
    if (email === undefined) setEmail('');
    if (password === undefined) setPassword('');
  };

  return (
    <FormWrapper onSubmit={submitHandler}>
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
          const validation = validate(email);
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
          const validation = validate(password);
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
