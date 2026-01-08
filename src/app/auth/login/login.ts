import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../core/services/authentication-service';

@Component({
  selector: 'app-login',
  imports: [SharedModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  LoginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authenticationService: AuthenticationService) {
    this.LoginForm = this.fb.group({
      LoginType: ['Admin'],
      EmailID: [null],
      Password: [null]
    })
  }

  async Login() {
    localStorage.setItem('UserDetails', JSON.stringify(this.LoginForm.value))
    await this.GetUserMenu()
    if (this.LoginForm.value.LoginType == 'Employee') {
      this.router.navigate(['employeedashboard'])
    } else {
      this.router.navigate(['dashboard'])
    }
  }

  async GetUserMenu() {
    await this.authenticationService.GetUserMenu()
  }

}
