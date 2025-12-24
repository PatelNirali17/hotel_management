import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '../../shared-module';

@Component({
  selector: 'app-fullscreen',
  imports: [CommonModule, SharedModule],
  templateUrl: './fullscreen.html',
  styleUrl: './fullscreen.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Fullscreen {
  toggle: boolean = false;
  @ViewChild('expand', { static: false }) private expand!: ElementRef;
  @ViewChild('compress', { static: false }) private compress!: ElementRef;

  requestFullscreen(elem: any) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else {
    }
  };

  exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  @HostListener('click') getFullscreen() {
    if (this.expand) {
      this.requestFullscreen(document.documentElement);
    }
    if (this.compress) {
      this.exitFullscreen();
    }
  }

  @HostListener('window:resize') onFullScreenChange() {
    let fullscreenElement = document.fullscreenElement
    if (fullscreenElement != null) {
      this.toggle = true;
    } else {
      this.toggle = false;
    }
  }
}
