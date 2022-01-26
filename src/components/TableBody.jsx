import React, { useContext } from 'react';
import GlobalContext from '../context/globalContext';

function TableBody() {
  const { data } = useContext(GlobalContext);
  const arr = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate',
    'gravity', 'terrain', 'surface_water', 'population', 'films', 'created', 'edited',
    'url'];
  return (
    <tbody>
      { data && data.results.map((value) => (
        <tr key={ value.name }>
          { arr.map((val, index) => (
            <td key={ `${index} - ${val}` }>
              { value[val] }
            </td>
          )) }
        </tr>
      )) }
    </tbody>
  );
}

export default TableBody;
