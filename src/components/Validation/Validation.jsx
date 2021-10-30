import PropTypes from 'prop-types';

const Validation = ({ render }) => {
  const validate = (input) => {
    if (!input) return 'cannot be blank';
  };

  return render(validate);
};

Validation.propTypes = {
  render: PropTypes.func.isRequired,
};

export default Validation;
