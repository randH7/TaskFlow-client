import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { ProjectAddDTO } from 'src/app/models/project-add.model';
import { NgToastService } from 'ng-angular-popup';

declare function sideBarAction(elementId: string, elementId2: string): void;

@Component({
  selector: 'app-project-m',
  templateUrl: './project-m.component.html',
  styleUrls: ['./project-m.component.css']
})
export class ProjectMComponent implements OnInit {
 
  projects: any[] = [];

  projectForm: FormGroup;

  projectNameInput: FormControl;
  leaderUsernameInput: FormControl;
  startDateInput: FormControl;
  dueDateInput: FormControl;
  descriptionInput: FormControl;
  projectStatusInput: FormControl;
  employeesUsernameInput: FormControl;


  toppings = new FormControl();
  toppingList: string[] = ['Pepperoni', 'Mushrooms', 'Onions', 'Sausage', 'Bacon', 'Extra cheese'];


  constructor(private projectService: ProjectService, private toast: NgToastService) {
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


  onSubmit() {
    console.log(1)


    const resultArray = this.projectForm.value.employeesUsername.split(', ');

    // if (this.projectForm.valid) {
      const newProject: ProjectAddDTO = new ProjectAddDTO (
        this.projectForm.value.projectName,
        this.projectForm.value.leaderUsername,
        this.projectForm.value.startDate,
        this.projectForm.value.dueDate,
        this.projectForm.value.description,
        "",
        resultArray
      )

      this.projectService.addProject(newProject).subscribe({
        next: (response) => {
          this.ngOnInit();
          console.log('Project Added successfully:', response);
          this.openSuccess(response)
        },
        error: (error) => {
          console.error('Error Adding project:', error);
          this.openError(error.error)
          console.error(error.error);
        }
      });

      console.log('z')
      this.projectForm.reset();
    
    // }

  }

  sideBarAction(): void {
    console.log(11)
    sideBarAction(".sidebar", ".bx-menu");
  }

  openSuccess(response: any) {
    this.toast.success({detail:"Success", summary:response, duration:6000, position:'bottomRight'});
  }

  openError(error: any) {
    this.toast.error({detail:"Error", summary:error, duration:6000, position:'bottomRight'});
  }

}
