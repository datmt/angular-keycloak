import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(
  keycloak: KeycloakService
) {
  return () =>
    keycloak.init({
      config: {
        url: 'https://sso.openexl.com/auth',
        realm: 'openexl',
        clientId: 'openexl-fe',
      }
    });
}
