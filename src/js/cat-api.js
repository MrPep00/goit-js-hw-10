export function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';
  const apiKey =
    'live_86lXvOSuiF0TB8qZsLAqtKwuIt4g7hRYI34cxcD8lxYG16pPWorGNrp3KLJHvful';

  return fetch(url, {
    headers: {
      'x-api-key': apiKey,
    },
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      console.error('Error fetching breed collection:', error);
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_id=${breedId}`;
  const apiKey =
    'live_86lXvOSuiF0TB8qZsLAqtKwuIt4g7hRYI34cxcD8lxYG16pPWorGNrp3KLJHvful';

  return fetch(url, {
    headers: {
      'x-api-key': apiKey,
    },
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      console.error('Error fetching cat information:', error);
      throw error;
    });
}
