import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedGuard } from './guards/is-logged.guard';
import { SureGuard } from './guards/sure.guard';
import { AllComponent } from './pages/products/all/all.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { RegisterComponent } from './pages/user/register/register.component';

const routes: Routes = [
  {path:"", component:ProfileComponent},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent, canActivate:[IsLoggedGuard]},
  {path:"all", component:AllComponent, canDeactivate:[SureGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
