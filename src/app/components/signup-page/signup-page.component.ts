import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms'; // Import necessary form-related modules
import { AuthService } from '../../services/auth-service.service';
import { UserSignUp } from '../../models/user-signup.model';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {

  signupForm: FormGroup;

  nameInput: FormControl;
  usernameInput: FormControl;
  jobTitleInput: FormControl;
  emailInput: FormControl;
  passwordInput: FormControl;
  roleInput: FormControl;
 
  constructor(private authService: AuthService, private router: Router, private toast: NgToastService) {

    this.nameInput = new FormControl("", Validators.required);
    this.usernameInput = new FormControl("", Validators.required);
    this.jobTitleInput = new FormControl("", Validators.required);
    this.emailInput = new FormControl("", [Validators.required, Validators.email]);
    this.passwordInput = new FormControl("", [Validators.required, Validators.minLength(8)]);
    this.roleInput = new FormControl("", Validators.required);

    this.signupForm = new FormGroup({
      name: this.nameInput,
      username: this.usernameInput,
      jobTitle: this.jobTitleInput,
      email: this.emailInput,
      password: this.passwordInput,
      role: this.roleInput
    });
  }

  onSubmit() {

    if (this.signupForm.valid) {

      const user: UserSignUp = new UserSignUp(
        this.signupForm.value.username,
        this.signupForm.value.email,
        this.signupForm.value.password,
        this.signupForm.value.name,
        this.signupForm.value.jobTitle
      );

      const userType = this.signupForm.value.role;

      this.authService.signUp(user, userType).subscribe({
          next: (response) => {
            console.log(response);
            this.openSuccess(response)
            this.router.navigate(['/login']);
          },
          error: (error) => {
            this.openError(error.error)
            console.error(error.error);
          }
        });

      this.signupForm.reset();

    }
  }

  openSuccess(response: any) {
    this.toast.success({detail:"Success", summary:response, duration:6000, position:'bottomRight'});
  }

  openError(error: any) {
    this.toast.error({detail:"Error", summary:error, duration:6000, position:'bottomRight'});
  }

}
