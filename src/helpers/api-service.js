import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

export const postFormData = async formData => {
  try {
    const { data } = await axios.post(`${BASE_URL}/application`, formData);
    return data;
  } catch (error) {
    console.error('Ошибка при отправке запроса:', error);
    return error.message;
  }
};
