import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms'; // Import necessary form-related modules
import { AuthService } from '../../services/auth-service.service';
import { UserLogin } from '../../models/user-login.model';
import { UserVerifyDTO } from '../../models/user-verify.model';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {

  loginForm: FormGroup;

  usernameInput: FormControl;
  passwordInput: FormControl;
 
  constructor(private authService: AuthService, private router: Router, private toast: NgToastService) {
    
    this.usernameInput = new FormControl("", Validators.required);
    this.passwordInput = new FormControl("", Validators.required);

    this.loginForm = new FormGroup({
      username: this.usernameInput,
      password: this.passwordInput
    });
  }

  onSubmit() {

    if (this.loginForm.valid) {

      const user: UserLogin = new UserLogin(
        this.loginForm.value.username,
        this.loginForm.value.password
      );

      console.log(user);

      this.authService.login(user).subscribe({
        next: (response) => {

          console.log('Login successful')

          // Store user in local storage to keep user logged in between page refreshes
          localStorage.removeItem('authToken');
          localStorage.setItem('authToken', response.access_token);

          // Load user data
          this.authService.verifyToken().subscribe({
            next: (userData: UserVerifyDTO) => {

              // Store user data in local storage
              localStorage.setItem('currentUser', JSON.stringify(userData));
              this.authService.currentUserSubject.next(userData);

              console.log(userData.role)
              if(userData.role == "ROLE_MANAGER"){
              // Redirect to dashboard for manager page
              this.router.navigate(['/dashboard-m']);
              }else{
              // Redirect to dashboard for manager page
              this.router.navigate(['/dashboard-e']);
              }
    
              },
              error: (error) => {
                this.openError('Internal error please try again later')
              }
          });
        },
        error: (error) => {
          console.log('Username or password is wrong')
          this.openError('Username or password is wrong')
        }
      });

    }

  }

  openSuccess(response: any) {
    this.toast.success({detail:"Success", summary:response, duration:6000, position:'bottomRight'});
  }

  openError(error: any) {
    this.toast.error({detail:"Error", summary:error, duration:6000, position:'bottomRight'});
  }

}
