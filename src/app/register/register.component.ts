import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private route:Router) {}

  registerdetails = {
    username: "",
    password: "",
    role : "etudiant",
};

register() {
  alert("compte créé avec succés");
  this.route.navigate(['/', 'login']);
}


}
