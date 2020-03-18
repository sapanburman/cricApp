import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';



@NgModule({
  declarations: [DashboardComponent, AdminLoginComponent],
  imports: [
    CommonModule
  ]
})
export class AdminComponentsModule { }
