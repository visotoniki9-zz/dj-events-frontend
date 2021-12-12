const axios = require('axios');
const data = require('./data.json');

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
const { events } = data;

events.forEach(async (event) => {
  axios
    .post(`${API_URL}/events`, {
      ...event, date: Date.parse(event.date),
    })
    .then((res) => {
      console.log(`statusCode: ${res.status}`);
    })
    .catch((error) => {
      console.error(error);
    });
});
