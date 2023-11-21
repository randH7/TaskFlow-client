import { Component } from '@angular/core';

declare function sideBarAction(elementId: string, elementId2: string): void;

@Component({
  selector: 'app-employ-m',
  templateUrl: './employ-m.component.html',
  styleUrls: ['./employ-m.component.css']
})
export class EmployMComponent {

  sideBarAction(): void {
    console.log(11)
    sideBarAction(".sidebar", ".bx-menu");
  }
  
}
