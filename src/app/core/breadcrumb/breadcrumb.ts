import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router, RouterModule, UrlSegment } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumb',
  imports: [SharedModule, CommonModule, RouterModule],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss',
})
export class Breadcrumb {
  public breadcrumbs: {
    name: string;
    url: string
  }[] = [];

  constructor(public router: Router, public activatedRoute: ActivatedRoute, public title: Title) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.breadcrumbs = [];
        this.parseRoute(this.router.routerState.snapshot.root);
      }
    })
  }

  private parseRoute(node: ActivatedRouteSnapshot) {
    if (node.data['breadcrumb']) {
      if (node.url.length) {
        let urlSegments: UrlSegment[] = [];
        node.pathFromRoot.forEach(routerState => {
          urlSegments = urlSegments.concat(routerState.url);
        });
        let url = urlSegments.map(urlSegment => {
          return urlSegment.path;
        }).join('/');
        this.breadcrumbs.push({
          name: node.data['breadcrumb'],
          url: '/' + url
        })
      }
    }
    if (node.firstChild) {
      this.parseRoute(node.firstChild);
    }
  }

  navigateTo(routerLink: string | undefined) {
    if (routerLink != null) {
      this.router.navigate([routerLink])
    }
  }

  public closeSubMenus() {
    // let menu = document.querySelector(".sidenav-menu-outer");
    // if(menu){
    //     for (let i = 0; i < menu.children[0].children.length; i++) {
    //         let child = menu.children[0].children[i];
    //         if(child){
    //             if(child.children[0].classList.contains('expanded')){
    //                 child.children[0].classList.remove('expanded');
    //                 child.children[1].classList.remove('show');
    //             }
    //         }
    //     }
    // }
  }
}
