import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { proyect, Response } from '../interfaces/intefaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiURL: string =
    'https://api-manage-143a4eee-gateway-my-cp4i.mycluster-jlhd-ccc03eca20d26e6ac64511f874a64b9b-0000.us-south.containers.appdomain.cloud/dev-01/qa/Banco_Rosado_API_Lab/InnovationProject';
  proyect!: proyect;

  valid: number = 0;

  get status() {
    return this.valid;
  }

  get proyecto() {
    return { ...this.proyect };
  }

  constructor(private http: HttpClient) {}

  createCase(
    nameProject: string,
    name: string,
    email: string,
    description: string,
    phone: number,
    file: string
  ): Observable<any> {
    const headers = {
      'X-IBM-Client-Id': '96ccac865ca043186617883556983401',
      'content-Type': 'application/json',
      accept: 'application/json',
    };
    console.log(name);
    const body = {
      NameProject: `${nameProject}`,
      Attendant: `${name}`,
      Email: `${email}`,
      DescriptionOfProyect: `${description}`,
      AttachedFiles: `${file}`,
      CaseReference: '1',
      ContactID: '8797123684335616',
      PhoneNumber: `${phone}`,
      EstimatedMonths: 91.90195951,
    };
    return this.http.post<Response>(this.apiURL, body, { headers }).pipe(
      tap((resp) => {
        console.log("respuesta de la api");
        this.valid = 1;
        this.proyect = {
          nameProject: resp.NameProject,
          fullName: resp.Attendant,
          email: resp.Email,
          caseReference: resp.CaseReference,
          months: resp.EstimatedMonths,
        };
      })
    );
  }
}
