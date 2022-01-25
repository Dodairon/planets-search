import React from 'react';
import FilterHeader from './filterHeader';

function Header() {
  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <input type="text" data-testid="name-filter" />
      <FilterHeader />
    </div>
  );
}

export default Header;
