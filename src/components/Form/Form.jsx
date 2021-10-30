import { useRef, useState } from 'react';
import Validation from '../Validation/Validation';
import { FormWrapper } from './Form.styled';
import SubmitInput from './FormElements/SubmitInput';
import TextInputs from './FormElements/TextInputs';

const Form = () => {
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const nameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    if (name === undefined) {
      setName('');
      nameRef.current.classList.add('error');
    }
    if (email === undefined) {
      setEmail('');
      emailRef.current.classList.add('error');
    }
    if (password === undefined) {
      setPassword('');
      passwordRef.current.classList.add('error');
    }
    if (!name) {
      nameRef.current.classList.add('error');
      nameRef.current.classList.remove('success');
    }
    if (!email) {
      emailRef.current.classList.add('error');
      emailRef.current.classList.remove('success');
    }
    if (!password) {
      passwordRef.current.classList.add('error');
      passwordRef.current.classList.remove('success');
    }

    if (name) {
      nameRef.current.classList.add('success');
      nameRef.current.classList.remove('error');
    }

    if (email) {
      emailRef.current.classList.add('success');
      emailRef.current.classList.remove('error');
    }

    if (password) {
      passwordRef.current.classList.add('success');
      passwordRef.current.classList.remove('error');
    }
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
              ref={nameRef}
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
              ref={emailRef}
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
              ref={passwordRef}
            />
          );
        }}
      />

      <SubmitInput text='Submit' />
    </FormWrapper>
  );
};

export default Form;
