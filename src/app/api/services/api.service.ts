import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { proyect, Response } from "../interfaces/intefaces";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL: string = 'https://api-manage-691e5904-gateway-my-cp4i.mycluster-dal12-jlhd-ccc03eca20d26e6ac64511f874a64b9b-0000.us-south.containers.appdomain.cloud/org-provide/qa/Banco_Rosado_API_Lab/InnovationProject'
  
  proyect!: proyect;

  valid: boolean = false;

  get status (){
    return this.valid
  }


  get proyecto() {
    return {...this.proyect}
  }
  
  constructor( private http: HttpClient) { }

  createCase( nameProject: string, name:string, email: string, description:string, phone: number) : Observable <any> {
    const headers = { 'X-IBM-Client-Id': 'bacc867489068eb298f4f40abe25e5c4', 'content-Type': 'application/json', 'accept': 'application/json' };
    const body =  {
                    "NameProject": `${ nameProject }`,
                    "Attendant": `${ name }`,
                    "Email": `${ email }`,
                    "DescriptionOfProyect": `${ description }`,
                    "AttachedFiles": "dawozu",
                    "CaseReference": "1",
                    "ContactID": "8797123684335616",
                    "PhoneNumber": `${ phone}`,
                    "EstimatedMonths": 91.90195951
                  };
    return this.http.post<Response>(this.apiURL, body, { headers })
      .pipe(
        tap(
          resp => {
            this.valid = true;
            this.proyect = {
              nameProject: resp.NameProject ,
              fullName: resp.Attendant ,
              email: resp.Email ,
              caseReference: resp.CaseReference ,
              months: resp.EstimatedDays
            }
          }
        )
      )
  }
}
