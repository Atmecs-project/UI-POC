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
  constructor( private _apiService: SharedServiceService){}
  ngOnInit(){}

}