import { Component, OnInit } from '@angular/core';
import { AnimationFrameScheduler } from 'rxjs/internal/scheduler/AnimationFrameScheduler';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService, private router:Router) {}

  password: string = '';
  confirmPassword: string = '';
  termsAccepted: boolean = false;
  email: string = '';

  ngOnInit(): void {}

  isPasswordValid(): boolean {
    const hasNumber = /\d/.test(this.password);
    const hasAlphabet = /[a-zA-Z]/.test(this.password);
    const isValidLength = this.password.length >= 6;
    return isValidLength && hasNumber && hasAlphabet;
  }
  createAccount() {
    // Check if email is valid
    if (!this.validateEmail(this.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Check if password is provided and has sufficient length
    if (this.password.length < 6) {
      alert('Password length should be at least 6 characters.');
      return;
    }
    // Check if passwords match and are not empty
    if (
      this.password === '' ||
      this.confirmPassword === '' ||
      this.password !== this.confirmPassword
    ) {
      alert('Passwords cannot be empty and must match.');
      return;
    }

    // Check if terms are accepted
    if (!this.termsAccepted) {
      alert('You must accept the terms.');
      return;
    }

    const userData = {
      name:'Username',
      email: this.email,
      password: this.password,
    };

    this.userService.registerUser(userData).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        alert('User account created successfully!');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error registering user:', error);
        alert('User account not created.');

      }
    );
  }

  validateEmail(email: string): boolean {
    // Basic regex pattern for email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
}
