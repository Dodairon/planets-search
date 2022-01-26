import React, { useContext } from 'react';
import GlobalContext from '../context/globalContext';

function TableBody() {
  const { data, search } = useContext(GlobalContext);
  const arr = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate',
    'gravity', 'terrain', 'surface_water', 'population', 'films', 'created', 'edited',
    'url'];

  const filterName = (infoAPI, searchValue) => {
    if (!infoAPI) return [];
    if (searchValue) {
      return infoAPI.results.filter((planet) => planet.name.includes(searchValue));
    }
    return infoAPI.results;
  };

  const arrAPI = filterName(data, search);

  return (
    <tbody>
      { arrAPI.map((values) => (
        <tr key={ values.name }>
          { arr.map((val, index) => (
            <td key={ `${index} - ${val}` }>
              { values[val] }
            </td>
          )) }
        </tr>
      )) }
    </tbody>
  );
}

export default TableBody;
