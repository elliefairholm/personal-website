const { BACK_END_URI } = require('../config')

export default async (data) => {
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(data)
  }
  return await fetch(`${BACK_END_URI}/email`, options)
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(res => res.json())
    .catch((err) => {
      console.error(err)
      return 'Unable to send to send email.';
    });
}
