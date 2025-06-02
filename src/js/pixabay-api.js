import axios from 'axios';

export async function getImagesByQuery(query, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '50647927-495c70707602983112414a885'; 

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 15,
    page: page,
  });

  const url = `${BASE_URL}?${params}`;

  const response = await axios.get(url);
  return response.data;
}
