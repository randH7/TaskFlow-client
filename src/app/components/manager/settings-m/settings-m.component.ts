import { Component } from '@angular/core';

declare function sideBarAction(elementId: string, elementId2: string): void;

@Component({
  selector: 'app-settings-m',
  templateUrl: './settings-m.component.html',
  styleUrls: ['./settings-m.component.css']
})
export class SettingsMComponent {

  sideBarAction(): void {
    console.log(11)
    sideBarAction(".sidebar", ".bx-menu");
  }

}
