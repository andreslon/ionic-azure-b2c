export const b2cConfig = {
    auth: {
      clientId: '',
      authority: '',
      knownAuthorities: [''],
      redirectUri: 'http://localhost:8100',
      postLogoutRedirectUri: 'http://localhost:8100',
    },
    cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: true,
    },
  };
  