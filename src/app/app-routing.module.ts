import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'gifs',
    loadChildren: () => import('./pages/gifs/gifs.module').then( m => m.GifsPageModule)
  },
  {
    path: 'agenda-view',
    loadChildren: () => import('./pages/agenda/agenda-view/agenda-view.module').then( m => m.AgendaViewPageModule)
  },
  {
    path: 'agenda-edit',
    loadChildren: () => import('./pages/agenda/agenda-edit/agenda-edit.module').then( m => m.AgendaEditPageModule)
  },
  {
    path: 'perdidos-view',
    loadChildren: () => import('./pages/foros/perdidos/perdidos-view/perdidos-view.module').then( m => m.PerdidosViewPageModule)
  },
  {
    path: 'perdidos-form',
    loadChildren: () => import('./pages/foros/perdidos/perdidos-form/perdidos-form.module').then( m => m.PerdidosFormPageModule)
  },
  {
    path: 'adopcion-view',
    loadChildren: () => import('./pages/foros/adopcion/adopcion-view/adopcion-view.module').then( m => m.AdopcionViewPageModule)
  },
  {
    path: 'adopcion-form',
    loadChildren: () => import('./pages/foros/adopcion/adopcion-form/adopcion-form.module').then( m => m.AdopcionFormPageModule)
  },
  {
    path: 'agenda-info',
    loadChildren: () => import('./pages/agenda/agenda-info/agenda-info.module').then( m => m.AgendaInfoPageModule)
  },
  {
    path: 'album-modal-zoom',
    loadChildren: () => import('./pages/albumes/album-modal-zoom/album-modal-zoom.module').then( m => m.AlbumModalZoomPageModule)
  },
  {
    path: 'album-modal-slides',
    loadChildren: () => import('./pages/albumes/album-modal-slides/album-modal-slides.module').then( m => m.AlbumModalSlidesPageModule)
  },  {
    path: 'agenda-crear',
    loadChildren: () => import('./pages/agenda/agenda-crear/agenda-crear.module').then( m => m.AgendaCrearPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
