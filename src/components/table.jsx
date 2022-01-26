import React from 'react';
import FilterHeader from './filterHeader';
import InputSearch from './inputSearch';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

function Table() {
  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <InputSearch />
      <FilterHeader />
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
}

export default Table;
