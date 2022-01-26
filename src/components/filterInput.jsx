import PropTypes from 'prop-types';
import React from 'react';

function FilterInput(props) {
  const { value, handleChange } = props;
  return (
    <div>
      <input
        type="number"
        data-testid="value-filter"
        value={ value }
        onChange={ () => handleChange(value) }
      />
    </div>
  );
}

FilterInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default FilterInput;
