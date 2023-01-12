import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  public isLoggedIn: boolean = false;
  public layoutTheme: any = '#000000';
  public leftTheme: any = '#000000';
  public rightTheme: any = '#000000';
  public footerTheme: any = '#000000';
  public headerTheme: any = '#000000';
  public footerLayout: any;
  public rightLayout: boolean = false;
  public leftLayout: boolean = false;
  public showLeftMenu : boolean = false;
  public showLogo : boolean = true;
  public themeID: any;
  public selectFont : any = 'Tahoma';
  constructor( private _http: HttpClient) { }
  
  url="http://localhost:5000/employees";
  themeURL = "http://localhost:5000/themes";
  updateThemeUrl = "http://localhost:5000/themes/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getUserData(){
    const getUserInfoUrl = 'https://miniproject-747d.restdb.io/rest/userinfo'
    return this._http.get( getUserInfoUrl, { headers: new HttpHeaders({ 'x-apikey': 'b784e808cd01df094e4c86461ad74dbee0b44', 'DbName': 'miniproject-747d', "Access-Control-Allow-Headers": "Content-Type, Authorization"})});
  }  
  
  employees()
  {
    return this._http.get(this.url);
  }
  getTheme(){
    return this._http.get(this.themeURL)
  }
  updateTheme(id : any, theme : any){
    // return this._http.put(this.updateThemeUrl+id, JSON.stringify(theme));
    return this._http.put(this.updateThemeUrl + id, theme);
  }
}
