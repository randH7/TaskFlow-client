import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { TitleCasePipe } from '../app/pipe/titlecase.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { DashboardMComponent } from './components/manager/dashboard-m/dashboard-m.component';
import { DashboardEComponent } from './components/employ/dashboard-e/dashboard-e.component';
import { SideNavBarComponent } from './components/shared/side-nav-bar/side-nav-bar.component';
import { ProjectMComponent } from './components/manager/project-m/project-m.component';
import { EmployMComponent } from './components/manager/employ-m/employ-m.component';
import { SettingsMComponent } from './components/manager/settings-m/settings-m.component';
import { ProjectDetailsMComponent } from './components/manager/project-details-m/project-details-m.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutPageComponent,
    NavBarComponent,
    LoginPageComponent,
    SignupPageComponent,
    ContactPageComponent,
    DashboardMComponent,
    DashboardEComponent,
    SideNavBarComponent,
    ProjectMComponent,
    EmployMComponent,
    SettingsMComponent,
    TitleCasePipe,
    ProjectDetailsMComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
