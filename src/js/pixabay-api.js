import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

export const fetchFotosByQuery = searchQuery => {
  // const searchParams = new URLSearchParams({
  //   key: '43952062-1ac9439355a7535a7f5f048fb',
  //   q: searchQuery,
  //   image_type: 'photo',
  //   orientation: 'horizontal',
  //   safesearch: true, //фільтр за віком
  // });

  return axios
    .get(`${BASE_URL}`, {
      params: {
        key: '43952062-1ac9439355a7535a7f5f048fb',
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data)
    .catch(error => console.log(error));

  // return fetch(`${BASE_URL}?${searchParams}`).then(response => {
  //   if (!response.ok) {
  //     throw new Error(response.statusText);
  //   }
  //   return response.json();
  // });
};
