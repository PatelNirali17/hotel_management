import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication-service';
import { Router } from '@angular/router';
import { UserMenu } from '../../shared/component/user-menu/user-menu';
import { Fullscreen } from '../../shared/component/fullscreen/fullscreen';

@Component({
  selector: 'app-header',
  imports: [SharedModule, CommonModule,UserMenu,Fullscreen],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Output() SideNavToggle = new EventEmitter();

  constructor(private authenticationService: AuthenticationService, private router: Router) {

  }

  ngOnInit() {

  }

  Logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login'])
  }

  openSidenav() {
    this.SideNavToggle.emit();
  }
}
