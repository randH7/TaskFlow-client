import { Component } from '@angular/core';
import { navbarData } from './nav-data';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

declare function sideBarAction(elementId: string, elementId2: string): void;

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent {

  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
    console.log("logging out");
    this.router.navigate(["/login"]);
  }

  sideBarAction(): void {
    console.log(11)
    sideBarAction(".sidebar", ".bx-menu");
  }

  // collapsed = true;
  navData = navbarData;
}
