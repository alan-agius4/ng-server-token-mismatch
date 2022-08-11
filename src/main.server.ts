/***************************************************************************************************
 * Initialize the server environment - for example, adding DOM built-in types to the global scope.
 *
 * NOTE:
 * This import must come before any imports (direct or transitive) that rely on DOM built-ins being
 * available, such as `@angular/elements`.
 */
import '@angular/platform-server/init';

import { enableProdMode, Type } from '@angular/core';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';

import { renderModule as renderModuleOriginal } from '@angular/platform-server';
import { APP_BASE_HREF } from '@angular/common';

export const renderModule = (
  module: Type<unknown>,
  options: {
    document?: string;
    url?: string;
    appBaseHref?: string;
  }
) =>
  renderModuleOriginal(module, {
    url: options.url,
    document: options.document,
    extraProviders: [{ provide: APP_BASE_HREF, useValue: options.appBaseHref }],
  });
