import PropTypes from 'prop-types';
import React from 'react';

function FilterSelect(props) {
  const { value, handleChange, datatestid } = props;
  return (
    <div>
      <select
        data-testid={ datatestid }
        value={ value }
        onChange={ () => handleChange(value) }
      >
        {valuesArray.map((values, index) => (
          <option key={ index } value={ values }>{ values }</option>
        ))}
      </select>
    </div>
  );
}

FilterSelect.propTypes = {
  datatestid: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default FilterSelect;
