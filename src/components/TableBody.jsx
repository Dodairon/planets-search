import React, { useContext } from 'react';
import GlobalContext from '../context/globalContext';

function TableBody() {
  const { data, search, filter } = useContext(GlobalContext);
  const arr = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate',
    'gravity', 'terrain', 'surface_water', 'population', 'films', 'created', 'edited',
    'url'];

  const filterName = (infoAPI, searchValue, filterArr) => {
    if (!infoAPI) return [];
    if (searchValue) {
      return infoAPI.results
        .filter((planet) => planet.name.includes(searchValue));
    }
    // if (filterArr.length > 0) {
    //   const arrData = infoAPI.results
    //     .filter((planet) => planet.name.includes(searchValue));
    //   if (filterArr[0].comparison === 'maior que') {
    //     return arrData
    //       .filter((plan) => plan[filterArr[0].column] > Number(filterArr[0].value));
    //   } if (filterArr[0].comparison === 'menor que') {
    //     return arrData
    //       .filter((plan) => plan[filterArr[0].column] < Number(filterArr[0].value));
    //   }
    //   return arrData
    //     .filter((plan) => plan[filterArr[0].column] === (filterArr[0].value));
    // }
    if (filterArr.length > 0) {
      const arrData = infoAPI.results;
      if (filterArr[0].comparison === 'maior que') {
        return arrData
          .filter((plan) => plan[filterArr[0].column] > Number(filterArr[0].value));
      } if (filterArr[0].comparison === 'menor que') {
        return arrData
          .filter((plan) => plan[filterArr[0].column] < Number(filterArr[0].value));
      }
      return arrData.filter((plan) => plan[filterArr[0].column] === (filterArr[0].value));
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
