import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
const error = document.querySelector('.error');

function populateBreedsDropdown(breeds) {
  select.innerHTML = '';

  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.text = breed.name;

    select.appendChild(option);
  });

  loader.style.display = 'none';
  select.style.display = 'block';
}

function displayCatInfo(catData) {
  const breedImageURL = catData[0].url;
  const breedName = catData[0].breeds[0].name;
  const breedDescription = catData[0].breeds[0].description;
  const breedTemperament = catData[0].breeds[0].temperament;

  const catImageElement = document.createElement('img');
  catImageElement.src = breedImageURL;

  const catInfoElement = document.querySelector('.cat-info');
  catInfoElement.innerHTML = '';

  const catNameElement = document.createElement('h2');
  catNameElement.textContent = breedName;
  catInfoElement.appendChild(catNameElement);

  catInfoElement.appendChild(catImageElement);

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = `Description: ${breedDescription}`;
  catInfoElement.appendChild(descriptionElement);

  const temperamentElement = document.createElement('p');
  temperamentElement.textContent = `Temperament: ${breedTemperament}`;
  catInfoElement.appendChild(temperamentElement);

  loader.style.display = 'none';
  catInfo.style.display = 'block';
  error.style.display = 'none';
}

function handleErrors(error) {
  console.error(error);
  loader.style.display = 'none';
  error.style.display = 'block';
  error.textContent = 'Oops! Something went wrong! Try reloading the page!';
}

select.addEventListener('change', () => {
  const selectedBreedId = select.value;
  loader.style.display = 'block';
  catInfo.style.display = 'none';

  fetchCatByBreed(selectedBreedId)
    .then(catData => {
      displayCatInfo(catData);
    })
    .catch(handleErrors);
});
function handlePageLoad() {
  loader.style.display = 'block';
  select.style.display = 'none';

  fetchBreeds()
    .then(breeds => {
      populateBreedsDropdown(breeds);
    })
    .catch(handleErrors);
}

window.addEventListener('DOMContentLoaded', handlePageLoad);
