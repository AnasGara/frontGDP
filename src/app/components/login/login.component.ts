import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string=""
  password:string=""
  constructor( private router: Router,private userService: UserService) { }

  ngOnInit(): void {
  }

  goToSingup() {
    //this.router.navigate(['/singup']);
  }
  login(){
    const credentials = {
      email: this.email,
      password: this.password
    };

    this.userService.loginUser(credentials).subscribe(
      response => {
        console.log('Login successful:', response);
        alert("Success")
        // Handle successful login (e.g., store token, navigate to another page)
      },
      error => {
        console.error('Error logging in:', error);
        alert("Failure")

        // Handle errors
      }
    );  }
}
