import { Component } from '@angular/core';
import { navbarData } from './nav-data';

declare function sideBarAction(elementId: string, elementId2: string): void;

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent {

  sideBarAction(): void {
    console.log(11)
    sideBarAction(".sidebar", ".bx-menu");
  }

  // collapsed = true;
  navData = navbarData;
}
