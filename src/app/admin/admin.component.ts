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
  showLogo : boolean = true;
  constructor( public sharedService : SharedServiceService) { }

  ngOnInit(): void {
    this.default();
    this.getThemes();
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

    localStorage.setItem('showLogo', this.showLogo ? 'true':'false');
    this.sharedService.showLogo = localStorage.getItem('showLogo') == 'true' ? true : false;

    window.location.reload();

  }
  publish(){

  }

  themeInfo: any;
  getThemes(){
    this.sharedService.getTheme().subscribe((data:any) => {
      this.themeInfo = data?.themes[0];
      this.sharedService.layoutTheme = this.themeInfo?.main_theme;
      this.sharedService.leftTheme = this.themeInfo?.left_theme;
      this.sharedService.rightTheme = this.themeInfo?.right_theme;
      this.sharedService.footerTheme =  this.themeInfo?.footer_theme;
      this.sharedService.headerTheme = this.themeInfo?.header_theme;
    });
  }

  default(){
    if(!localStorage.getItem('layouttheme')){
      // this.sharedService.layoutTheme = '#00000';
      this.favcolor = this.sharedService.layoutTheme;
    }
    else{
      // this.sharedService.layoutTheme = localStorage.getItem('layouttheme');
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

    if(!localStorage.getItem('showLogo')){
      this.sharedService.showLogo = false;
      this.showLogo = this.sharedService.showLogo;
    }
    else{
      this.sharedService.showLogo = localStorage.getItem('showLogo') == 'true' ? true : false;
      this.showLogo = this.sharedService.showLogo;
    }
  }

}
