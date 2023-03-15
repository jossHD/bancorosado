import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL: string = 'https://api-manage-691e5904-gateway-my-cp4i.mycluster-dal12-jlhd-ccc03eca20d26e6ac64511f874a64b9b-0000.us-south.containers.appdomain.cloud/org-provide/sandbox/Car_Insurance_API_Lab/CarRepairClaim'
  constructor( private http: HttpClient) { }

  createCase( name:string, email: string, license: string, description:string, phone: number) : Observable <any> {
    const headers = { 'X-IBM-Client-Id': '752f6d606d1326ce91a5f3dcdc6de068', 'content-Type': 'application/json', 'accept': 'application/json' };
    const body = {
                    "Name": `${ name }`,
                    "eMail": `${ email }`,
                    "LicensePlate": `${ license }`,
                    "DescriptionOfDamage": `${ description }`,
                    "PhotoOfCar": "horfuduweh",
                    "CaseReference": "biddopaj",
                    "ContactID": "2243419602681856",
                    "PhoneNumber": `${ phone}`,
                    "EstimatedDays": 91.37497293,
                    "EstimatedBill": 96.05156484
                  };
    return this.http.post(this.apiURL, body, { headers })

  }
}
