import { Routes } from '@angular/router';
import { Home } from './home/home';
import { UiComponent } from './ui/ui';

export const routes: Routes = [
    {
        path: '',
        component: Home, // Solo UN componente por ruta
        title: 'Inicio'
    },
    {
        path: 'ui', // Nueva ruta
        component: UiComponent,
        title: 'Componentes UI'
    },
    {
        path: '**',
        redirectTo: ''
    }
];