import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './globalContext';
import getAPI from '../services/API';

function GlobalProvider({ children }) {
  const [data, setData] = useState();
  const [column, setcolumn] = useState('population');
  const [comparison, setcomparison] = useState('maior que');
  const [value, setvalue] = useState(0);
  const [search, setsearch] = useState();
  const [filter, setfilter] = useState([]);

  useEffect(() => {
    const HandleApi = () => {
      getAPI()
        .then((dataApi) => setData(dataApi));
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
        search,
        setsearch,
        filter,
        setfilter,
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
