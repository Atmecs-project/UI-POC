import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  public isLoggedIn: boolean = false;
  public layoutTheme: any = '#000000';
  public footerLayout: any;
  public rightLayout: boolean = false;
  public leftLayout: boolean = false;
  public showLeftMenu : boolean = false;
  public showLogo : boolean = true;
  public selectFont : any = 'Tahoma';
  constructor( private _http: HttpClient) { }
  
  getUserData(){
    const getUserInfoUrl = 'https://miniproject-747d.restdb.io/rest/userinfo'
    return this._http.get( getUserInfoUrl, { headers: new HttpHeaders({ 'x-apikey': 'b784e808cd01df094e4c86461ad74dbee0b44', 'DbName': 'miniproject-747d', "Access-Control-Allow-Headers": "Content-Type, Authorization"})});
  }
}
