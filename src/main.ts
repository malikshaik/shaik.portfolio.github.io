import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';
import { ProfileComponent } from './app/profile/profile.component';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];



if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule.withServerTransition({ appId: 'serverApp' })),
        provideAnimations(),
        provideRouter(routes),
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
