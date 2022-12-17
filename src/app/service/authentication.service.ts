import { Injectable } from '@angular/core';
import {Auth ,signInWithEmailAndPassword,authState,createUserWithEmailAndPassword,UserCredential} from "@angular/fire/auth"
import { concatMap, from, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser$ = authState(this.auth);
  constructor( private auth:Auth) { }

  login(username:string,password:string){
  return from(signInWithEmailAndPassword(this.auth,username,password))
  }
  logout(): Observable<any> {
    return from(this.auth.signOut());
  }
signUp(email: string, password: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }
}

