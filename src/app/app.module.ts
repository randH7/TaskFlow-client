import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutPageComponent,
    NavBarComponent,
    LoginPageComponent,
    SignupPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
