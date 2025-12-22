import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../core/header/header';
import { SideMenu } from '../../core/side-menu/side-menu';
import { Breadcrumb } from '../../core/breadcrumb/breadcrumb';

@Component({
  selector: 'app-main-page',
  imports: [SharedModule,RouterOutlet,Header,SideMenu,Breadcrumb],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

}
