import axios from 'axios';

const BASE_URL = 'https://oksana-openko.onreder.com';
// 'https://localhost:3000';

export async function addContact(formData) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: formData,
  };

  const data = await axios
    .post(`${BASE_URL}/api/application`, formData, options)
    .then(response => response);
  // .catch(error => console.log('error: ', error));

  return data;
}
