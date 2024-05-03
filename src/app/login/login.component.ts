import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Credentials } from '../models/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService) {}
  
  logindetails:Credentials = {
    username: "",
    password: "",
};

  login(): void {
    
    this.auth.login(this.logindetails).subscribe(resp => {
      console.log(`logged in with token: ${resp.value}`);
    });
  }

}

