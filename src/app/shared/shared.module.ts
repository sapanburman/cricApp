import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from './components/admin/admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './components/admin/admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AdminSettingComponent } from './components/admin/admin-setting/admin-setting.component';
import {SiteHeaderComponent} from './components/site-header/site-header.component';
import {SiteFooterComponent} from './components/site-footer/site-footer.component';
import {RouterModule} from '@angular/router';
import { UserHeaderComponent } from './user/user-header/user-header.component';
import { UserFooterComponent } from './user/user-footer/user-footer.component';
import { UserSidebarComponent } from './components/user/user-sidebar/user-sidebar.component';
import {UserHeaderComponent} from "./components/user/user-header/user-header.component";
import {UserFooterComponent} from "./components/user/user-footer/user-footer.component";



@NgModule({
  declarations: [SiteHeaderComponent,
    SiteFooterComponent,
    AdminSidebarComponent, AdminFooterComponent, AdminHeaderComponent, AdminSettingComponent, UserHeaderComponent, UserFooterComponent, UserSidebarComponent, UserHeaderComponent, UserFooterComponent],
  exports: [
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
    AdminSettingComponent,
    SiteFooterComponent,
    SiteHeaderComponent,
    UserHeaderComponent,
    UserSidebarComponent,
    UserFooterComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
