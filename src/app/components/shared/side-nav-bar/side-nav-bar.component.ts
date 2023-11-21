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

  navData = navbarData;
  
  private currentUserString: string | null  = localStorage.getItem('currentUser');
  public userName: string = '';
  public jobTitle: string = '';

  constructor(private authService: AuthService, private router: Router) {

    const currentUser = JSON.parse(this.currentUserString as string);

    if (currentUser) {
      this.userName = currentUser.employName;
      this.jobTitle = currentUser.jobTitle;
    }
  }

  logout(): void {
    this.authService.logout();
    console.log("logging out");
    this.router.navigate(["/login"]);
  }

  sideBarAction(): void {
    console.log(11)
    sideBarAction(".sidebar", ".bx-menu");
  }

}
