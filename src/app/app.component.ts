import { Router } from '@angular/router';
import { Component } from '@angular/core';
import {AuthenticationService} from "../app/service/authentication.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthenticationService, private router:Router){}


  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['/'])
    })
  }
}
