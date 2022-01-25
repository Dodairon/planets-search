import React, { useContext } from 'react';
import FilterInput from './filterInput';
import FilterSelect from './filterSelect';
import GlobalContext from '../context/globalContext';

function FilterHeader() {
  const {
    column,
    setcolumn,
    comparison,
    setcomparison,
    value,
    setvalue,
  } = useContext(GlobalContext)
  return (
    <div>
      <h1>teste</h1>
      <FilterSelect
        datatestid="column-filter"
        value={ column }
        handleChange={ setcolumn }
        valuesArray={ }
      />
      <FilterSelect
        datatestid="comparison-filter"
        value={ comparison }
        handleChange={ setcomparison }
        valuesArray={ }
      />
      <FilterInput
        datatestid="value-filter"
        value={ }
        handleChange={ }
      />
      <FilterSelect
        datatestid={ }
        value={ value }
        handleChange={ setvalue }
        valuesArray={ }
      />
    </div>
  );
}

export default FilterHeader;
