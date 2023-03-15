import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-caso-created',
  templateUrl: './caso-created.component.html',
  styles: [
  ]
})
export class CasoCreatedComponent {

  get proyecto () {
    return this.apiservice.proyecto
  }

  constructor( private apiservice: ApiService) {

  }

}
