import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home, // Solo UN componente por ruta
        title: 'Inicio'
    },
    {
        path: '**',
        redirectTo: ''
    }
];