import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlinestore';
  isAuth: boolean = true;
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.authService.authSubject.subscribe({
      next: (isAuth: boolean) => { this.isAuth = isAuth; },
    }
    )
    //Trigger the transmission of information about isAuth
    this.authService.emitAuthSubject();
  }

}
