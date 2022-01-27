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
    filter,
  } = useContext(GlobalContext);

  const valuesArr = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  function filterColum(data) {
    return valuesArr.reduce((acc, curr) => {
      if (data.every((value2) => value2.column !== curr)) {
        acc.push(curr);
      }
      return acc;
    }, []);
  }
  return (
    <div>
      <FilterSelect
        datatestid="column-filter"
        value={ column }
        handleChange={ setcolumn }
        valuesArray={ filterColum(filter) }
      />
      <FilterSelect
        datatestid="comparison-filter"
        value={ comparison }
        handleChange={ setcomparison }
        valuesArray={ ['maior que',
          'menor que',
          'igual a'] }
      />
      <FilterInput
        datatestid="value-filter"
        value={ value }
        handleChange={ setvalue }
      />
    </div>
  );
}

export default FilterHeader;
