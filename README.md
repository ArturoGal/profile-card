# Profile Card
## Execution
To run this app, use any local server you like and go to `src/` or `src/index.html` on your preferred browser.

## Testing
To run the automation tests go to `test/` and install cypress:
```sh
npm install
```
Once cypress is installed, go to `test/cypress/` open the cypress UI:
```sh
npm run cypress:open
```
In the Cypress UI, select E2E, choose your preferred browser, and run `profile-card.cy.js`.

>If you are running your local server on a port different than `5500`, modify `baseUrl` property in the `cypress.config.js` file.