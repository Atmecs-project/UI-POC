import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() sideNavToggled=new EventEmitter<boolean>()
 rsideNavToggled=new EventEmitter<boolean>();
menuStatus:boolean=false;
rmenuStatus:boolean=false;

  constructor(public _apiService: SharedServiceService){  }
  ngOnInit(): void {    
  }

  sideNavToggle()
  {
    this.menuStatus=!this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
  rsideNavToggle()
  {
    this.rmenuStatus=!this.rmenuStatus;
    this.rsideNavToggled.emit(this.rmenuStatus);
  }
  logout(){
    localStorage.setItem('logged','false');
    this._apiService.isLoggedIn = localStorage.getItem('logged') == 'true' ? true : false;
  }
}
