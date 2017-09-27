import { Component, OnInit } from '@angular/core';
import { Services } from '../../../app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Services]
})
export class LoginComponent implements OnInit {

  constructor(private services: Services) { }

  ngOnInit() {
  }

  signIn(user: string, password: string) {
    
          this.services.authentication(user, password);
  }
}
