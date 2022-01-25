import React from 'react';
import './App.css';
import Table from './components/table';
import GlobalProvider from './context/globalProvider';

function App() {
  return (
    <GlobalProvider>
      <Table />
    </GlobalProvider>
  );
}

export default App;
