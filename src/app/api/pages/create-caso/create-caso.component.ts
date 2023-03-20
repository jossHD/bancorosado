import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { buffer } from 'rxjs';

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
    nameProject: ['', [ Validators.required ] ],
    description: ['', [ Validators.required ] ],
    phone: ['', [ Validators.required ] ],
  })

  
  nameProject: string = '';
  fullName: string = '';
  email: string = '';
  description: string = '';
  phone: string= '';
  filePDF: string = '';
  

  constructor( private apiService: ApiService, private fb: FormBuilder){  }

  fileEvent(fileInput:any){
      const file = fileInput.target.files[0]
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result?.slice(28)
        this.filePDF = base64String as string;
      };

  }


  apiCall(){
    
    let phonenumber  = +this.phone;
    this.apiService.valid = 2
    this.apiService.createCase( this.nameProject, this.fullName, this.email, this.description, phonenumber, this.filePDF )
    .subscribe(data => {
      console.log('apiCall response', this.filePDF)
      console.log(data);
    });

  }

}


