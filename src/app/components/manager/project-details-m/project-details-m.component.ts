import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectAddDTO } from 'src/app/models/project-add.model';

@Component({
  selector: 'app-project-details-m',
  templateUrl: './project-details-m.component.html',
  styleUrls: ['./project-details-m.component.css']
})
export class ProjectDetailsMComponent implements OnInit{

  project: any;
  projectId: number | null = null;

  projectForm: FormGroup;

  projectNameInput: FormControl;
  leaderUsernameInput: FormControl;
  startDateInput: FormControl;
  dueDateInput: FormControl;
  descriptionInput: FormControl;
  projectStatusInput: FormControl;
  employeesUsernameInput: FormControl;

  constructor(private route: ActivatedRoute, private projectService: ProjectService, private router: Router, private toast: NgToastService) {
    this.projectNameInput = new FormControl("", Validators.required);
    this.leaderUsernameInput = new FormControl("", Validators.required);
    this.startDateInput = new FormControl("", Validators.required);
    this.dueDateInput = new FormControl("", Validators.required);
    this.descriptionInput = new FormControl("", Validators.required);
    this.projectStatusInput = new FormControl("", Validators.required);
    this.employeesUsernameInput = new FormControl("", Validators.required);

    this.projectForm = new FormGroup({ 
      projectName:  this.projectNameInput ,
      leaderUsername: this.leaderUsernameInput,
      startDate: this.startDateInput,
      dueDate: this.dueDateInput,
      description: this.descriptionInput,
      projectStatus: this.projectStatusInput,
      employeesUsername: this.employeesUsernameInput
    });
  }

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

  editProject() {
    
    
    const resultString : String = this.project.employeesUsernames.join(', ');

    this.projectNameInput = new FormControl(this.project.detailsProjectDTO.projectName, Validators.required);
    this.leaderUsernameInput = new FormControl(this.project.detailsProjectDTO.leaderUsername, Validators.required);
    this.startDateInput = new FormControl(this.project.detailsProjectDTO.startDate, Validators.required);
    this.dueDateInput = new FormControl(this.project.detailsProjectDTO.dueDate, Validators.required);
    this.descriptionInput = new FormControl(this.project.detailsProjectDTO.description, Validators.required);
    this.projectStatusInput = new FormControl(this.project.detailsProjectDTO.projectStatus, Validators.required);
    this.employeesUsernameInput = new FormControl(resultString , Validators.required);

    this.projectForm = new FormGroup({ 
      projectName:  this.projectNameInput ,
      leaderUsername: this.leaderUsernameInput,
      startDate: this.startDateInput,
      dueDate: this.dueDateInput,
      description: this.descriptionInput,
      projectStatus: this.projectStatusInput,
      employeesUsername: this.employeesUsernameInput
    });
  }

  onSubmit() {


    const resultArray: String[] = this.projectForm.value.employeesUsername.split(', ');

      const newProject: ProjectAddDTO = new ProjectAddDTO (
        this.projectForm.value.projectName,
        this.projectForm.value.leaderUsername,
        this.projectForm.value.startDate,
        this.projectForm.value.dueDate,
        this.projectForm.value.description,
        this.projectForm.value.projectStatus,
        resultArray
      )

      this.projectService.editProject(newProject, this.projectId).subscribe({
        next: (response) => {
          this.ngOnInit();
          console.log('Project Updated successfully:', response);
          this.openSuccess(response)
        },
        error: (error) => {
          console.error('Error Updating project:', error);
          this.openError(error.error)
          console.error(error.error);
        }
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
