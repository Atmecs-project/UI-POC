import { Component } from '@angular/core';
import { SharedServiceService } from './shared-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mini-project';
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
    this.isLoggedIn = this._apiService.isLoggedIn;
  }
}
