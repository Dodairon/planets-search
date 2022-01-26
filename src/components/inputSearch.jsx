import React, { useContext } from 'react';
import GlobalContext from '../context/globalContext';

function InputSearch() {
  const { search, setsearch } = useContext(GlobalContext);
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ search }
        onChange={ (event) => { setsearch(event.target.value); } }
      />
    </div>
  );
}

export default InputSearch;
