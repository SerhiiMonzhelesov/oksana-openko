import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

export function addContact(formData) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: formData,
  };

  return axios
    .post(`${BASE_URL}/application`, formData, options)
    .then(response => response.data)
    .catch(error => {
      console.warn('Ошибка при отправке запроса:', error.message);
      throw error;
    });
}
