import React from 'react';
import Header from './Header';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

function Table() {
  return (
    <div>
      <Header />
      <table>
        <TableHeader />
        <TableBody />
      </table>

    </div>
  );
}

export default Table;
