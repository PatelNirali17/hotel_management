import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentUtcDateAdapter } from './core/interceptors/moment-utc-date-adapter';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(withEventReplay()), provideMomentDateAdapter(),
    provideHttpClient(withFetch(), withInterceptors([])),
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: DateAdapter, useClass: MomentUtcDateAdapter },
  ]
};
