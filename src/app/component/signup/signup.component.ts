import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from './../../service/authentication.service';
import { Component } from '@angular/core';
 import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';



export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    } else {
      return null;
    }
  };
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signUpForm =new FormGroup(
    {
      name: new FormControl('', Validators.required),
      SecoundName:new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl ('', [Validators.required,      Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)

]),
      confirmPassword: new FormControl ('', [Validators.required,      Validators.minLength(8)
]),
    },
    { validators: passwordsMatchValidator() }
  );
constructor(private authService:AuthenticationService , private toast: HotToastService , private router:Router ){}
    get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  get name() {
    return this.signUpForm.get('name');
  }
  get SecoundName(){
    return this.signUpForm.get('SecoundName')
  }
submit(){
  if(!this.signUpForm.valid) return
  const { email,password}= this.signUpForm.value
    if (!this.signUpForm.valid || !password || !email) {// this should be exist 
      return;
    }
  this.authService.signUp(email,password).pipe(        this.toast.observe({
          success: 'Congrats! You are all signed up',
          loading: 'Signing up...',
          error: ({ message }) => `${message}`,
        })
)  .subscribe(() => {
        this.router.navigate(['/home']);
      });

}


}
