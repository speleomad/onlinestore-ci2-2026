import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth: boolean = false;
  //Create a subject to emit the value of isAuth 
  authSubject = new Subject<boolean>();
  constructor() { }
  //Method for subject to emit the value of siAuth
  emitAuthSubject() {this.authSubject.next(this.isAuthenticated());}
  signIn() {this.isAuth = true;
            //Trigger the subject
           this.emitAuthSubject()
  }
  signOut() { this.isAuth = false;
            //Trigger the subject
             this.emitAuthSubject()
  }
  isAuthenticated(): boolean {
    return this.isAuth
  }
}