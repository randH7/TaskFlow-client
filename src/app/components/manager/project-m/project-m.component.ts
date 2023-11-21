import { Component } from '@angular/core';

declare function sideBarAction(elementId: string, elementId2: string): void;

@Component({
  selector: 'app-project-m',
  templateUrl: './project-m.component.html',
  styleUrls: ['./project-m.component.css']
})
export class ProjectMComponent {
 
  sideBarAction(): void {
    console.log(11)
    sideBarAction(".sidebar", ".bx-menu");
  }

}
