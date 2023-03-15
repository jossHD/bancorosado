import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCasoComponent } from './pages/create-caso/create-caso.component';
import { CasoCreatedComponent } from './pages/caso-created/caso-created.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    CreateCasoComponent,
    CasoCreatedComponent
  ],
  exports:[
    CreateCasoComponent,
    CasoCreatedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ApiModule { }
