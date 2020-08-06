const URL = 'https://rickandmortyapi.com/api/character/';

const getDataFromApi = () => {
  return fetch(URL)
  .then(response => response.json())
  .then(data => {
    return data.results
  })
}

export default getDataFromApi;