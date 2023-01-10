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
showLeftMenu:any;
showLogo:any;
img: any;
  constructor(public _apiService: SharedServiceService){  }
  ngOnInit(): void {   
    
    if(!localStorage.getItem('showLeftMenu')){
      this._apiService.showLeftMenu = false;
      this.showLeftMenu = this._apiService.showLeftMenu;
    }
    else{
      this._apiService.showLeftMenu = localStorage.getItem('showLeftMenu') == 'true' ? true : false;
      this.showLeftMenu = this._apiService.showLeftMenu;
    }

    if(!localStorage.getItem('showLogo')){
      this._apiService.showLogo = false;
      this.showLogo = this._apiService.showLogo;
    }
    else{
      this._apiService.showLogo = localStorage.getItem('showLogo') == 'true' ? true : false;
      this.showLogo = this._apiService.showLogo;
    }

    this.sideNavToggled.emit(this._apiService.showLeftMenu);
    this.img = '../atmecs.png';
    

  }

  sideNavToggle()
  {
    this.menuStatus=!this.menuStatus;
    // this.sideNavToggled.emit(this.menuStatus);
    this.sideNavToggled.emit(this._apiService.showLeftMenu);
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
