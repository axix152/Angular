import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  router = inject(Router);
  loginObj = {
    email: '',
    password: '',
  };
  onLogin() {
    if (
      this.loginObj.email === 'admin@email.com' &&
      this.loginObj.password === '112233'
    ) {
      debugger;
      this.router.navigateByUrl('/client');
      localStorage.setItem('email', this.loginObj.email);
    } else {
      alert('Invalid credentail');
    }
  }
}
