import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AdminDefaultModule} from './layouts/admin-default/admin-default.module';
import {RouterModule} from '@angular/router';
import { WelcomeBannerComponent } from './modules/landing-page/welcome-banner/welcome-banner.component';
import { CouchesListComponent } from './modules/landing-page/couches-list/couches-list.component';
import { ContactComponent } from './modules/landing-page/contact/contact.component';
import {LandingPageComponent} from './layouts/landing-page/landing-page.component';
import {LandingPageModule} from './layouts/landing-page/landing-page.module';
import {SharedModule} from './shared/shared.module';
import {environment} from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorage} from '@angular/fire/storage';
import { UserProfileComponent } from './modules/user-components/user-profile/user-profile.component';
import { UserPageComponent } from './layouts/user-page/user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeBannerComponent,
    CouchesListComponent,
    ContactComponent,
    LandingPageComponent,
    UserProfileComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminDefaultModule,
    LandingPageModule,
    RouterModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorage,
    AngularFireDatabaseModule,
    AngularFirestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
