import { Routes } from '@angular/router';
import { Home } from './home/home';
import { UiComponent } from './ui/ui';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Inicio - Start Bootstrap'
    },
    {
        path: 'ui',
        component: UiComponent,
        title: 'Componentes UI - Demo'
    },
    {
        path: '**',
        redirectTo: ''
    }
];