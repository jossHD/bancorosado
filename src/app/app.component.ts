import { Component } from '@angular/core';
import { proyect, Response } from "../app/api/interfaces/intefaces";
import { ApiService } from './api/services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get status () {
    return this.apiservice.valid
  }

  title = 'bancoRosado';

  constructor ( private apiservice: ApiService) {}
}
