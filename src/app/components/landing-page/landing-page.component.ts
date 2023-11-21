import { Component } from '@angular/core';


declare function changeColor(elementId: string, color: string): void;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {


  changeColor(elementId: string, color: string): void {
    console.log(2)
    changeColor(elementId, color);
  }

}
