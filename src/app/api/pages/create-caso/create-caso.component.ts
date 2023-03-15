import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-caso',
  templateUrl: './create-caso.component.html',
  styles: [
  ]
})
export class CreateCasoComponent {

  nombrePatterns: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.pattern(this.nombrePatterns) ] ],
    email: ['', [ Validators.required ] ],
    license: ['', [ Validators.required ] ],
    description: ['', [ Validators.required ] ],
    phone: ['', [ Validators.required ] ]
  })

  

  fullName: string = '';
  license: string = '';
  email: string = '';
  description: string = '';
  phone: string= '';
  phonenumber :number = +this.phone;

  constructor( private apiService: ApiService, private fb: FormBuilder ){  }

  apiCall(){
    
    this.apiService.createCase( this.fullName, this.email, this.license, this.description, this.phonenumber  ).subscribe(data => {
      console.log(data);
  });
  }

}


