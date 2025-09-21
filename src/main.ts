import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app'; // Debe ser App, NO Home

bootstrapApplication(App, appConfig) // Bootstrap App, no Home
  .catch((err) => console.error(err));