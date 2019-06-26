import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from '../app/signup/signup.component';
import { ServiciosComponent } from '../app/servicios/servicios.component';
import { ServicesComponent } from './servicesc/services.component';
import { ServicioComponent } from './servicio/servicio.component';
import { ServicioTargetComponent } from './servicio-target/servicio-target.component';
import { ProviderComponent } from './provider/provider.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'profile', component: ProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'servicio/:id', component: ServicioComponent },
  { path: 'provider/:id', component: ProviderComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
