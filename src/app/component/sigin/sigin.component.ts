import { AuthenticationService } from './../../service/authentication.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent {
  

  loginForm = new FormGroup({
    email :new FormControl('', [Validators.required,Validators.email]),
    password :new FormControl('',Validators.required)
  })
constructor(private authService:AuthenticationService   ,  private router: Router,     private toast: HotToastService, 
      private fb: NonNullableFormBuilder
){}
    get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  submit() {
    const { email, password } = this.loginForm.value;

    if (!this.loginForm.valid || !email || !password) {
      return;
    }

    this.authService
      .login(email, password)
         .pipe(
        this.toast.observe({
          success: 'Logged in successfully',
          loading: 'Logging in...',
          error: ({ message }) => `There was an error: ${message} `,
        })
      )

      .subscribe(() => {
        this.router.navigate(['/books']);
      });
  }



}
