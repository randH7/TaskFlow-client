import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-project-details-m',
  templateUrl: './project-details-m.component.html',
  styleUrls: ['./project-details-m.component.css']
})
export class ProjectDetailsMComponent implements OnInit{

  project: any;
  projectId: number | null = null;

  constructor(private route: ActivatedRoute, private projectService: ProjectService, private router: Router, private toast: NgToastService) {}

  ngOnInit(): void {

    // Subscribe to route parameter changes
    this.route.paramMap.subscribe(params => {
      // Retrieve projectId from route parameters
      this.projectId = +params.get('projectId')!;

      this.projectService.getProjectById(this.projectId).subscribe({
        next: (details) => {
          this.project = details;
          console.log(this.project)
        },
        error: (error) => {
          console.log(error.error)
        }
      });
    });

  }

  deleteProject(): void {

     // Subscribe to route parameter changes
     this.route.paramMap.subscribe(params => {
      // Retrieve projectId from route parameters
      this.projectId = +params.get('projectId')!;

      this.projectService.deleteProject(this.projectId).subscribe({
        next: (response) => {
          console.log('Project deleted successfully:', response);
          this.openSuccess(response)
          this.router.navigate(['/project-m']);
        },
        error:(error) => {
          console.error('Error deleting project:', error);
          this.openError(error.error)
          console.error(error.error);
        }
      });

    });

  }

  openSuccess(response: any) {
    this.toast.success({detail:"Success", summary:response, duration:6000, position:'bottomRight'});
  }

  openError(error: any) {
    this.toast.error({detail:"Error", summary:error, duration:6000, position:'bottomRight'});
  }


}
