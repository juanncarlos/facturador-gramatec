import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const base_api = 'https://apiperu.dev/api';// +  dni + 
const token_api ='a5eabdd82339dcf681070388a91e9886e12da1a71f64cb9ef03d5c99c33a58d5';

//a5eabdd82339dcf681070388a91e9886e12da1a71f64cb9ef03d5c99c33a58d5
//https://apiperu.dev/api/dni/INGRESAR_NUMERO_DNI_AQUI?api_token=INGRESAR_TOKEN_AQUI",
const base_url = 'https://dniruc.apisperu.com/api/v1';
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFyYW5pYmFyZ2Vyc29uMjhAZ21haWwuY29tIn0.ObOQyED4Nhtvm-b7bQpbxYGygJxqQqvop4VuqonMi-8';
////-----------
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer ssa");
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "ruc_empresa": "20559129390",
  "sol_usuario": "RIELLICA",
  "clave_usuario": "posicible",
  "comprobantes": [
    {
      "ruc_emisor": "20559129390",
      "codigo_tipo_documento": "07",
      "serie_documento": "F003",
      "numero_documento": "2024",
      "fecha_de_emision": "2023-04-31",
      "total": "33991.50"
    }
  ]
});

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
@Injectable({
  providedIn: 'root'
})
export class ApiReniecService {

  constructor(private http: HttpClient) {}

  // list_users(type: any, number: any): Observable<any> {
   //  const url = `${base_url}/${type}/${number}?token=${token}`;
     //return this.http.get(url);
   //}
 
   list_users(type:any,number:any): Observable<any>{
     const url2 = `${base_api}/${type}/${number}?api_token=${token_api}`;
     console.log("la ap" + url2);
     return  this.http.get(url2); 
   }

}
