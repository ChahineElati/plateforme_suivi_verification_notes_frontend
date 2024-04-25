import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/plain',
    }),
  };

  logindetails = {
    username: "",
    password: "",
    role : null,
};

  login(): void {
    this.http.post("http://localhost:8082/login",  this.logindetails).subscribe((resp:any) => {
      if(resp!=null) {
        console.log("logged in");
        // localStorage.setItem("token", resp.token);
      }
    });
  }

}

