import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {AdminDefaultComponent} from './admin-default.component';
import {DashboardComponent} from '../../modules/admin-components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AdminDefaultComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class AdminDefaultModule { }
