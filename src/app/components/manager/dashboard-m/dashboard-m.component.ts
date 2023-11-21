import { Component } from '@angular/core';

declare function sideBarAction(elementId: string, elementId2: string): void;

@Component({
  selector: 'app-dashboard-m',
  templateUrl: './dashboard-m.component.html',
  styleUrls: ['./dashboard-m.component.css']
})
export class DashboardMComponent {
 
  sideBarAction(): void {
    console.log(11)
    sideBarAction(".sidebar", ".bx-menu");
  }

}
