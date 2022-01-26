import React from 'react';

function TableHeader() {
  const arr = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'URL',
  ];

  return (
    <thead>
      <tr>
        { arr.map((data) => (
          <th key={ data }>{ data }</th>
        )) }
      </tr>
    </thead>
  );
}

export default TableHeader;
