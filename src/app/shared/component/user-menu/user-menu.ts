import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { SharedModule } from '../../shared-module';
import { AuthenticationService } from '../../../core/services/authentication-service';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  imports: [SharedModule,RouterModule],
  templateUrl: './user-menu.html',
  styleUrl: './user-menu.scss',
})
export class UserMenu {
  LoginType: any;

  constructor(private authenticationService: AuthenticationService, @Inject(PLATFORM_ID) private platformId: object,private router : Router) {
    if (isPlatformBrowser(this.platformId)) {
      const UserDetails = JSON.parse(localStorage.getItem('UserDetails') || '{}')
      this.LoginType = UserDetails.LoginType
    }
  }


  Logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login'])
  }

}
