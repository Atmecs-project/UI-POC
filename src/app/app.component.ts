import { Component } from '@angular/core';
import { SharedServiceService } from './shared-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ATMECS Project';
  sideNavStatus: boolean=false;
  rsideNavStatus: boolean=false;

  userData: any;
  isLoggedIn: boolean | undefined;
  constructor( public _apiService: SharedServiceService){}
  ngOnInit(){
    // this._apiService.getUserData().subscribe( res=>{
    //   this.userData = res;
    //   console.log(this.userData);
    // }, error=>{
    //   console.log(error);
    // })
    // this.isLoggedIn = localStorage.getItem('logged') == 'true' ? true : false;// this._apiService.isLoggedIn;
    this._apiService.isLoggedIn = localStorage.getItem('logged') == 'true' ? true : false;
  }
}
