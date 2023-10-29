import axios from 'axios';

const BASE_URL = 'https://oksana-openko.onreder.com';
// 'http://localhost:3000';

export async function addContact(formData) {
  const options = {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': 'https://serhiimonzhelesov.github.io',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'application/json',
    },
    data: formData,
    withCredentials: true,
  };

  const { data } = await axios.post(
    `${BASE_URL}/api/application`,
    formData,
    options
  );

  return data;
}

// export async function addUser(user) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: user,
//   };

//   const { data } = await axios.post(
//     'https://goit-node-js-backend.onrender.com/api/users/register',
//     user,
//     options
//   );

//   console.log('data: ', data);
// }

// const testURL = 'https://oksana-openko.onreder.com/api/application';

// function addApply(formData) {
//   const myInit = {
//     method: 'POST',
//     mode: 'cors',
//     credentials: 'include',
//     headers: {
// 'Access-Control-Allow-Origin': '*',
// 'Access-Control-Allow-Headers': '*',
// 'Access-Control-Allow-Credentials': 'true',
//     'Content-Type': 'application/json',
//   },
//   body: formData,
// };

//   const myRequest = new Request(testURL, myInit);
//   fetch(myRequest)
//     .then(function (response) {
//       return response;
//     })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (e) {
//       console.log(e);
//     });
// }

// addApply({
//   name: 'Serhii',
//   phone: '+380668572712',
//   service: 'Психотерапія',
//   format: 'Онлайн',
//   question: 'new test postman to web',
// });
