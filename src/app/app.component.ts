import { Component } from '@angular/core';
import { ApiService } from './api/services/api.service';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get status () {
    return this.apiservice.valid
  }
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  title = 'bancoRosado';

  constructor ( private apiservice: ApiService) {}
}
