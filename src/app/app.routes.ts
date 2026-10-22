// Habilita la navegacion entre las vistas
import { Routes } from '@angular/router';
import { Bienvenido } from './componentes/bienvenido/bienvenido';
import { Principal } from './componentes/principal/principal';
import { Registro } from './componentes/registro/registro';
import { Personal } from './componentes/personal/personal';
import { Cuenta } from './componentes/cuenta/cuenta';
import { Direccion } from './componentes/direccion/direccion';
import { Fotografia } from './componentes/fotografia/fotografia';

export const routes: Routes = [
    { path: 'bienvenido', component: Bienvenido },
    { path: 'principal', component: Principal },
    { path: 'registro', component: Registro },
    { path: 'personal', component: Personal },
    { path: 'cuenta', component: Cuenta },
    { path: 'direccion', component: Direccion },
    { path: 'fotografia', component: Fotografia },
    { path: '', redirectTo: '/bienvenido', pathMatch: 'full' },
];


