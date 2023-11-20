import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms'; // Import necessary form-related modules
import { AuthService } from '../../services/auth-service.service';
import { UserLogin } from '../../models/user-login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {

  loginForm: FormGroup;

  usernameInput: FormControl;
  passwordInput: FormControl;
 
  constructor(private authService: AuthService, private router: Router) {
    
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
          console.log(response);
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error(error);
        }
      });

      this.loginForm.reset();

    }

  }

}
