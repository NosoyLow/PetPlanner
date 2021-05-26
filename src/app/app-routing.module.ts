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
    path: 'album/:id',
    loadChildren: () => import('./pages/albumes/album/album.module').then( m => m.AlbumPageModule)
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
    path: 'album-modal-zoom',
    loadChildren: () => import('./pages/albumes/album-modal-zoom/album-modal-zoom.module').then( m => m.AlbumModalZoomPageModule)
  },
  {
    path: 'album-modal-slides',
    loadChildren: () => import('./pages/albumes/album-modal-slides/album-modal-slides.module').then( m => m.AlbumModalSlidesPageModule)
  },
  {
    path: 'agenda-crear',
    loadChildren: () => import('./pages/agenda/agenda-crear/agenda-crear.module').then( m => m.AgendaCrearPageModule)
  },
  {
    path: 'crear-album',
    loadChildren: () => import('./components/crear-album/crear-album.module').then( m => m.CrearAlbumPageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then( m => m.TutorialPageModule)
  }

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
