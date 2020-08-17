// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseURL: 'https://localhost:8080',
  firebase: {
    apiKey: "AIzaSyAemJU7wAD1kQsAw0qmBJM5H4RYmGVUbvU",
    authDomain: "doar-faz-bem.firebaseapp.com",
    databaseURL: "https://doar-faz-bem.firebaseio.com",
    projectId: "doar-faz-bem",
    storageBucket: "doar-faz-bem.appspot.com",
    messagingSenderId: "265531884987",
    appId: "1:265531884987:web:4a8ce41ebb6cae3249f09e",
    measurementId: "G-PX9BE23N0B"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
