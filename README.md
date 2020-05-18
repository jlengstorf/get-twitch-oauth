# Get an Twitch OAuth Token for Server-to-Server Requests

If you, like me, are running chatbots and other streaming tools, you’ll need an OAuth token [as of May 11, 2020](https://discuss.dev.twitch.tv/t/requiring-oauth-for-helix-twitch-api-endpoints/23916).

I built this helper to create a convenient way to quickly get that access token for use in my various streaming bots and apps.

## Quickstart

### 1. Install the package

```bash
# install the package
npm i @jlengstorf/get-twitch-oauth
```

### 2. Set environment variables

```bash
TWITCH_CLIENT_ID=<YOUR_TWITCH_CLIENT_ID>
TWITCH_CLIENT_SECRET=<YOUR_TWITCH_CLIENT_SECRET>
```

### 3. Get a token

```js
const { getTwitchAccessToken } = require('@jlengstorf/get-twitch-oauth');
const { access_token } = getTwitchAccessToken();
```

For a more complete example, see `demo/index.js`.

## API

| param           | required | default                            | description                                                                                     |
| --------------- | -------- | ---------------------------------- | ----------------------------------------------------------------------------------------------- |
| `client_id`     | no       | `process.env.TWITCH_CLIENT_ID`     | your [Twitch app’s client ID](https://dev.twitch.tv/console/apps)                               |
| `client_secret` | no       | `process.env.TWITCH_CLIENT_SECRET` | your [Twitch app’s client secret](https://dev.twitch.tv/console/apps)                           |
| `grant_type`    | no       | `"client_credentials"`             | for app-to-app tokens, this _must_ be `"client_credentials"`                                    |
| `scopes`        | no       | `""`                               | any [permission scopes](https://dev.twitch.tv/docs/authentication/#scopes) required by your app |
