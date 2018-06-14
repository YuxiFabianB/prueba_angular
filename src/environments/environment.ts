// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  backEndUrl: "http://localhost:4200/api/",

  employeePath: "employees",
  colorsPath: "colors",
  projectPath: "projects",
  userPath: "users",

  auth0Config: {
    clientID: 'B3ssMr0r0l2tOprsOk4pa1OUthcTtCqZ',
    domain: 'dayro.auth0.com',
    responseType: 'token id_token',
    audience: 'https://dayro.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
