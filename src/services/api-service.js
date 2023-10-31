import axios from 'axios';

const BASE_URL = 'https://oksana-openko.onreder.com';
//  'http://localhost:3000/api/application';

export async function addContact(formData) {
  console.log('formData: ', formData);
  const options = {
    method: 'POST',
    headers: {
      // 'Access-Control-Allow-Origin': 'http://localhost:3001',
      // 'Access-Control-Allow-Headers': '*',
      // 'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'application/json',
    },
    // withCredentials: true,
    data: formData,
  };

  const { data } = await axios.post(`${BASE_URL}`, formData, options);

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

// addUser({
//   name: 'serh',
//   email: 'serh@goit-node-js-backend.com',
//   password: '123456',
// });

// ======================= FETCH REQUEST ===============

// const testURL = 'http://localhost:3000/api/application';

// function addApply(formData) {
//   const myInit = {
//     method: 'POST',
//     mode: 'cors',
//     credentials: 'include',
//     headers: {
//       'Access-Control-Allow-Origin': 'http://localhost:3001',
//       'Access-Control-Allow-Headers': '*',
//       'Access-Control-Allow-Credentials': 'true',
//       'Content-Type': 'application/json',
//     },
//     body: formData,
//   };

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
//   question: 'FETCH req local to local',
// });
