import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  favcolor : any;
  // footerLayout: boolean = false;
  rightLayout: boolean = false;
  leftLayout: boolean = false;
  showLeftMenu: boolean = false;
  constructor( public sharedService : SharedServiceService) { }

  ngOnInit(): void {
    if(!localStorage.getItem('layouttheme')){
      this.sharedService.layoutTheme = '#00000';
      this.favcolor = this.sharedService.layoutTheme;
    }
    else{
      this.sharedService.layoutTheme = localStorage.getItem('layouttheme');
      this.favcolor = this.sharedService.layoutTheme;
    }

    // if(!localStorage.getItem('footerLayout')){
    //   this.sharedService.footerLayout = false;
    //   this.footerLayout = this.sharedService.footerLayout;
    // }
    // else{
    //   this.sharedService.footerLayout = localStorage.getItem('footerLayout') == 'true' ? true : false;
    //   this.footerLayout = this.sharedService.footerLayout;
    // }

    if(!localStorage.getItem('leftLayout')){
      this.sharedService.leftLayout = false;
      this.leftLayout = this.sharedService.leftLayout;
    }
    else{
      this.sharedService.leftLayout = localStorage.getItem('leftLayout') == 'true' ? true : false;
      this.leftLayout = this.sharedService.leftLayout;
    }

    if(!localStorage.getItem('rightLayout')){
      this.sharedService.rightLayout = false;
      this.rightLayout = this.sharedService.rightLayout;
    }
    else{
      this.sharedService.rightLayout = localStorage.getItem('rightLayout') == 'true' ? true : false;
      this.rightLayout = this.sharedService.rightLayout;
    }

    if(!localStorage.getItem('showLeftMenu')){
      this.sharedService.showLeftMenu = false;
      this.showLeftMenu = this.sharedService.showLeftMenu;
    }
    else{
      this.sharedService.showLeftMenu = localStorage.getItem('showLeftMenu') == 'true' ? true : false;
      this.showLeftMenu = this.sharedService.showLeftMenu;
    }

  }

  apply(){
    console.log(this.favcolor);
    // console.log(this.footerLayout);
    console.log(this.rightLayout);
    console.log(this.leftLayout);

    localStorage.setItem('layouttheme', this.favcolor);
    this.sharedService.layoutTheme = localStorage.getItem('layouttheme');

    // localStorage.setItem('footerLayout', this.footerLayout ? 'true':'false');
    // this.sharedService.footerLayout = localStorage.getItem('footerLayout') == 'true' ? true : false;

    localStorage.setItem('leftLayout', this.leftLayout ? 'true':'false');
    this.sharedService.leftLayout = localStorage.getItem('leftLayout') == 'true' ? true : false;

    localStorage.setItem('rightLayout', this.rightLayout ? 'true':'false');
    this.sharedService.rightLayout = localStorage.getItem('rightLayout') == 'true' ? true : false;

    localStorage.setItem('showLeftMenu', this.showLeftMenu ? 'true':'false');
    this.sharedService.showLeftMenu = localStorage.getItem('showLeftMenu') == 'true' ? true : false;

    window.location.reload();

  }
  publish(){

  }

}
