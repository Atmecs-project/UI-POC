import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor( private _http: HttpClient) { }
  
  getUserData(){
    const getUserInfoUrl = 'https://miniproject-747d.restdb.io/rest/userinfo'
    return this._http.get( getUserInfoUrl, { headers: new HttpHeaders({ 'x-apikey': 'b784e808cd01df094e4c86461ad74dbee0b44', 'DbName': 'miniproject-747d', "Access-Control-Allow-Headers": "Content-Type, Authorization"})});
  }
}
