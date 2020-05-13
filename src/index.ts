const qs = require('querystring');
const nodeFetch = require('node-fetch');

const TWITCH_API = 'https://id.twitch.tv/oauth2/token';

interface Config {
  client_id?: string;
  client_secret?: string;
  grant_type?: string;
  scopes?: string;
}

interface TwitchTokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export async function getTwitchAccessToken({
  client_id = process.env.TWITCH_CLIENT_ID,
  client_secret = process.env.TWITCH_CLIENT_SECRET,
  grant_type = 'client_credentials',
  scopes = '',
}: Config = {}): Promise<TwitchTokenResponse> {
  const params = qs.stringify({ client_id, client_secret, grant_type, scopes });
  const { access_token, expires_in, token_type } = await nodeFetch(
    `${TWITCH_API}?${params}`,
    {
      method: 'POST',
    },
  )
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(err.message);
    });

  return { access_token, expires_in, token_type };
}
