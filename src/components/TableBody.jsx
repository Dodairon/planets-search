import React, { useContext } from 'react';
import GlobalContext from '../context/globalContext';
import arrInfo from './helper';

function TableBody() {
  const { data, search, filter } = useContext(GlobalContext);
  const arr = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate',
    'gravity', 'terrain', 'surface_water', 'population', 'films', 'created', 'edited',
    'url'];

  const filterName = (infoAPI, searchValue, filterArr) => {
    if (!infoAPI) return [];
    if (searchValue) {
      if (filterArr.length === 0) {
        return infoAPI.results.filter((planet) => planet.name.includes(searchValue));
      }
      if (filterArr.length > 0) {
        const arrData1 = infoAPI.results
          .filter((planet) => planet.name.includes(searchValue));
        return arrInfo(filterArr, arrData1);
      }
    }
    if (filterArr.length === 0) {
      return infoAPI.results;
    }
    if (filterArr.length > 0) {
      const arrData2 = infoAPI.results;
      return arrInfo(filterArr, arrData2);
    }
    return infoAPI.results;
  };

  const arrAPI = filterName(data, search, filter);

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
