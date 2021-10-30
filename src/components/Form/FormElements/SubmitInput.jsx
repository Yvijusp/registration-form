import PropTypes from 'prop-types';
import { SubmitInputWrapper } from './SubmitInput.styled';

const SubmitInput = ({ text }) => {
  return <SubmitInputWrapper type='submit' value={text} />;
};

SubmitInput.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SubmitInput;
