import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'crearuser',
    loadChildren: () => import('./crearuser/crearuser.module').then( m => m.CrearuserPageModule)
  },
  {
    path: 'cambiarcontra',
    loadChildren: () => import('./cambiarcontra/cambiarcontra.module').then( m => m.CambiarcontraPageModule)
  },
  {
    path: 'inicio/:idUsuario',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'inicio-profe/:idUsuario',
    loadChildren: () => import('./inicio-profe/inicio-profe.module').then( m => m.InicioProfePageModule)
  },
  {
    path: 'qrdetalle/:idAsignatura',
    loadChildren: () => import('./qrdetalle/qrdetalle.module').then( m => m.QRdetallePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
