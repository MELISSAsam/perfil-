import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';        

export const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'usuario',
    loadComponent: () => import('./pages/usuario/usuario.page').then( m => m.UsuarioPage)
  },
];
export const appRouter = provideRouter(routes);