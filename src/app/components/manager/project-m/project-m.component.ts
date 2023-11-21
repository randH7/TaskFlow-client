import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';

declare function sideBarAction(elementId: string, elementId2: string): void;

@Component({
  selector: 'app-project-m',
  templateUrl: './project-m.component.html',
  styleUrls: ['./project-m.component.css']
})
export class ProjectMComponent implements OnInit {
 
  projects: any[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: (data) => {
        console.log(data)
        this.projects = data;
      },
      error: (error) => {
        console.log(error.error)
      }
    });
  }


  sideBarAction(): void {
    console.log(11)
    sideBarAction(".sidebar", ".bx-menu");
  }

}
