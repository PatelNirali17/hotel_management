import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [SharedModule,RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

}
