import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/application'; // Замените на URL вашего сервера

export const postFormData = async formData => {
  try {
    const response = await axios.post(BASE_URL, formData, {
      headers: {
        'Content-Type': 'application/json',
        // Другие заголовки, если необходимо
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Запрос завершился ошибкой. Статус: ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
};
