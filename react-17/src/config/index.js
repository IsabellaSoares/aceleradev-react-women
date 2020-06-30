export const config = {
  spotify: {
    authorizationURL: 'https://accounts.spotify.com/authorize',
    clientId: 'da63ccc4dff24d2d8de96122ba458a64',
    redirectUrl: `${window.location.origin}/authorize`,
    webAPI: 'https://api.spotify.com/v1',
    scopes: ['user-read-email', 'user-read-private', 'streaming'],
  },
};
