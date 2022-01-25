import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './globalContext';
import getAPI from '../services/API';

function GlobalProvider({ children }) {
  const [data, setData] = useState();
  const [column, setcolumn] = useState();
  const [comparison, setcomparison] = useState();
  const [value, setvalue] = useState();

  useEffect(() => {
    const HandleApi = () => {
      getAPI()
        .then((value) => setData(value));
    };
    HandleApi();
  }, []);

  return (
    <GlobalContext.Provider
      value={ {
        data,
        column,
        setcolumn,
        comparison,
        setcomparison,
        value,
        setvalue,
      } }
    >
      { children }
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
