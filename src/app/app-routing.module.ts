import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminDefaultComponent} from './layouts/admin-default/admin-default.component';
import {DashboardComponent} from './modules/admin-components/dashboard/dashboard.component';
import {LoginComponent} from './modules/Athentication/login/login.component';
import {RegisterComponent} from './modules/Athentication/register/register.component';
import {LandingPageComponent} from './layouts/landing-page/landing-page.component';
import {ForgetPasswordComponent} from './modules/Athentication/forget-password/forget-password.component';
import {AdminLoginComponent} from './modules/admin-components/admin-login/admin-login.component';


const routes: Routes = [

  { path : '', redirectTo: 'home', pathMatch : 'full'},
  {path : 'home', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'pass-forget', component: ForgetPasswordComponent},
  {path: 'admin', component: AdminLoginComponent,
  children: [
    {path: '', component: AdminDefaultComponent},
    {path: 'dashboard', component: DashboardComponent}
  ]},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
