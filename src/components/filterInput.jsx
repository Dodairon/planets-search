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
        onChange={ (event) => handleChange(event.target.value) }
      />
    </div>
  );
}

FilterInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default FilterInput;
