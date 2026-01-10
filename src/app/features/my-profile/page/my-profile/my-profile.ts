import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-my-profile',
  imports: [SharedModule],
  templateUrl: './my-profile.html',
  styleUrl: './my-profile.scss',
})
export class MyProfile {
  Role: any;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      const UserDetails = JSON.parse(localStorage.getItem('UserDetails') || '{}')
      this.Role = UserDetails.LoginType
      if(UserDetails.LoginType == 'Employee'){
        
      }else{

      }
    }
  }
}
