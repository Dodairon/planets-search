const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getAPI = () => (fetch(URL)
  .then((response) => response.json())
  .then((data) => data)
  .catch((err) => err)
);

export default getAPI;
