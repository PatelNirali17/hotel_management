import { Component, EventEmitter, Inject, Output, PLATFORM_ID } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../services/authentication-service';

@Component({
  selector: 'app-side-menu',
  imports: [SharedModule, CommonModule, RouterModule],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.scss',
})
export class SideMenu {
  @Output() closeSideNav = new EventEmitter();
  menuItems: any[] = [];
  activeRoute: string = '';
  constructor(private router: Router, private authenticationService: AuthenticationService, @Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      var UserMenuList = this.authenticationService.UserMenuValue
      const UserDetails = JSON.parse(localStorage.getItem('UserDetails') || '{}')
      const roleMenuMap: any = { Admin: UserMenuList.AdminMenu, Employee: UserMenuList.EmployeeMenu };
      const MenuList = this.buildMenuTree(roleMenuMap[UserDetails.LoginType]);
      this.menuItems = MenuList || [];
    }
    router.events.subscribe(() => {
      this.activeRoute = this.router.url;
    });
  }

  buildMenuTree(list: any, parentId = 0) {
    return list?.filter((item: any) => item.parentId === parentId)
      .map((item: any) => ({
        ID: item.id, title: item.title, icon: item.icon, routerLink: item.routerLink, ParentID: item.parentId,
        subMenuItems: this.buildMenuTree(list, item.id)
      }));
  }

  onToggleClose() {
    this.closeSideNav.emit();
  }
}
