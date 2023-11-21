import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { DashboardMComponent } from './components/manager/dashboard-m/dashboard-m.component';
import { DashboardEComponent } from './components/employ/dashboard-e/dashboard-e.component';
import { AuthGuardService } from './services/guard/auth-guard.service';
import { ManagerGuardService } from './services/guard/manager-guard.service';
import { EmployGuardService } from './services/guard/employ-guard.service';
import { ProjectMComponent } from './components/manager/project-m/project-m.component';
import { EmployMComponent } from './components/manager/employ-m/employ-m.component';
import { SettingsMComponent } from './components/manager/settings-m/settings-m.component';
import { ProjectDetailsMComponent } from './components/manager/project-details-m/project-details-m.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'sign-up',
    component: SignupPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'dashboard-m',
    component: DashboardMComponent,
    canActivate: [AuthGuardService, ManagerGuardService]
  },
  {
    path: 'project-m',
    component: ProjectMComponent,
    canActivate: [AuthGuardService, ManagerGuardService]
  },
  { 
    path: 'project-m/:projectId', 
    component: ProjectDetailsMComponent,
    canActivate: [AuthGuardService, ManagerGuardService]
  },
  {
    path: 'employ-m',
    component: EmployMComponent,
    canActivate: [AuthGuardService, ManagerGuardService]
  },
  {
    path: 'settings-m',
    component: SettingsMComponent,
    canActivate: [AuthGuardService, ManagerGuardService]
  },
  {
    path: 'dashboard-e',
    component: DashboardEComponent,
    canActivate: [AuthGuardService, EmployGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
