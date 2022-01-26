import PropTypes from 'prop-types';
import React from 'react';

function FilterSelect(props) {
  const { value, handleChange, datatestid, valuesArray } = props;
  return (
    <div>
      <select
        data-testid={ datatestid }
        value={ value }
        onChange={ (event) => handleChange(event.target.value) }
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
  valuesArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterSelect;
