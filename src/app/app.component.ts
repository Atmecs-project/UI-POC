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
  constructor( private _apiService: SharedServiceService){}
  ngOnInit(){
    // this._apiService.getUserData().subscribe( res=>{
    //   this.userData = res;
    //   console.log(this.userData);
    // }, error=>{
    //   console.log(error);
    // })
  }
}
