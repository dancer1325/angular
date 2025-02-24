import {ApplicationConfig, InjectionToken, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes)],
};

export interface AppConfig {
  title: string;
}

// `APP_CONFIG`         token of type `InjectionToken`
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config description');
