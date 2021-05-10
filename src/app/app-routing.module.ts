import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CameraComponent } from './components/camera/camera.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'AppComponent',
    component: AppComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'CameraPRUEBA',
    component: CameraComponent
  },
  {
    path:'',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
