import { ButtonWrapper } from './Button.styled';
import PropTypes from 'prop-types';

// Google, Facebook props are just color types. Could have been called Primary or Secondary.
const Button = ({ text, icon, google, facebook, onClickHandler }) => {
  return (
    <ButtonWrapper google={google} facebook={facebook} onClick={onClickHandler}>
      {icon} {text}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
  onClickHandler: PropTypes.func,
  google: PropTypes.bool,
  facebook: PropTypes.bool,
};

export default Button;
