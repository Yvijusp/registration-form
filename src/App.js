import { useState } from 'react';
import Button from './components/Button/Button';
import RegistrationForm from './components/Form/RegistrationForm';
import Modal from './components/Modal/Modal';
import { GlobalStyle } from './GlobalStyles';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Button text='Sign Up' google onClickHandler={() => setOpen(!open)} />
      {open && (
        <Modal close={() => setOpen(!open)}>
          <RegistrationForm />
        </Modal>
      )}
    </>
  );
};

export default App;
