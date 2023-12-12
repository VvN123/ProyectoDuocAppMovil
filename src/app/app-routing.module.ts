import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//a
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home-profesor',
    loadChildren: () => import('./paginas/home-profesor/home-profesor.module').then( m => m.HomeProfesorPageModule)
  },
  {
    path: 'home-alumno',
    loadChildren: () => import('./paginas/home-alumno/home-alumno.module').then( m => m.HomeAlumnoPageModule)
  },
  {
    path: 'scanner-qr',
    loadChildren: () => import('./paginas/scanner-qr/scanner-qr.module').then( m => m.ScannerQrPageModule)
  },
  {
    path: 'detalle-asistencia',
    loadChildren: () => import('./paginas/detalle-asistencia/detalle-asistencia.module').then( m => m.DetalleAsistenciaPageModule)
  },
  {
    path: 'detalle-clase',
    loadChildren: () => import('./paginas/detalle-clase/detalle-clase.module').then( m => m.DetalleClasePageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
