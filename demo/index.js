// load the env vars from this directory
// IMPORTANT: make sure to create `.env` and add your credentials!
require('dotenv').config({ path: `${__dirname}/.env` });

const fetch = require('node-fetch');
const { getTwitchAccessToken } = require('..');

async function getStreamData() {
  // get the server-to-server OAuth token from Twitch
  const { access_token } = await getTwitchAccessToken();

  // send an authenticated request to the Twitch API
  // see https://dev.twitch.tv/docs/api/reference#get-streams
  const response = await fetch('https://api.twitch.tv/helix/streams', {
    method: 'GET',
    headers: {
      'Client-ID': process.env.TWITCH_CLIENT_ID,
      Authorization: `Bearer ${access_token}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));

  // Twitch response with 20 streams that are currently live
  console.log(response);
}

getStreamData();
