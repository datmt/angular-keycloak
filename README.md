# Starter project for Angular & Keycloak
Grab this project and start developing your angular application with Keycloak SSO.
When creating a client on Keycloak, make sure to set Web Origins to `*` to bypass CORS:
![img.png](img.png)

Edit `src/app/init/keycloak-init.factory.ts` to match your Keycloak server settings.

The rest are angular-related stuff.
Brought to you by [datmt](https://datmt.com/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
