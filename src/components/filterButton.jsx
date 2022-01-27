import React, { useContext } from 'react';
import GlobalContext from '../context/globalContext';

function FilterButton() {
  const { column, comparison, value, filter, setfilter } = useContext(GlobalContext);

  function handlechange() {
    const newFilter = {
      column,
      comparison,
      value,
    };
    const arrayFilter = [...filter, newFilter];
    setfilter(arrayFilter);
  }

  return (
    <button
      type="button"
      data-testid="button-filter"
      onClick={ () => handlechange() }
    >
      Filtrar
    </button>
  );
}

export default FilterButton;
