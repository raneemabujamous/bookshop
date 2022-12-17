import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from "../../service/authentication.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  constructor(public authService: AuthenticationService, private router:Router){}


  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['/'])
    })
  }
}
