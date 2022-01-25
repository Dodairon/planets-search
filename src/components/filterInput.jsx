import React from 'react';

function FilterInput() {
  return (
    <div>
      <input
        type="number"
        data-testid="value-filter"
        value={ value }
        onChange={ (event) => handleChange(event) }
      />
    </div>
  );
}

export default FilterInput;
