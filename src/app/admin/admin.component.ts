import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  favcolor: any;
  // footerLayout: boolean = false;
  rightLayout: boolean = false;
  leftLayout: boolean = false;
  showLeftMenu: boolean = false;
  showLogo : boolean = true;
  myFont : any;
  layoutInfo: any;
  headercolor: any;
  leftcolor: any;
  rightcolor: any;
  footercolor: any;
  constructor( public sharedService : SharedServiceService) { }

  ngOnInit(): void {
    this.default();
    this.getThemes();
    this.getLayout();
  }

  apply() {
    console.log(this.favcolor);
    // console.log(this.footerLayout);
    console.log(this.rightLayout);
    console.log(this.leftLayout);

    localStorage.setItem('layouttheme', this.favcolor);
    this.sharedService.layoutTheme = localStorage.getItem('layouttheme');

    // localStorage.setItem('footerLayout', this.footerLayout ? 'true':'false');
    // this.sharedService.footerLayout = localStorage.getItem('footerLayout') == 'true' ? true : false;

    localStorage.setItem('leftLayout', this.leftLayout ? 'true' : 'false');
    this.sharedService.leftLayout = localStorage.getItem('leftLayout') == 'true' ? true : false;

    localStorage.setItem('rightLayout', this.rightLayout ? 'true' : 'false');
    this.sharedService.rightLayout = localStorage.getItem('rightLayout') == 'true' ? true : false;

    localStorage.setItem('showLeftMenu', this.showLeftMenu ? 'true' : 'false');
    this.sharedService.showLeftMenu = localStorage.getItem('showLeftMenu') == 'true' ? true : false;

    localStorage.setItem('showLogo', this.showLogo ? 'true' : 'false');
    this.sharedService.showLogo = localStorage.getItem('showLogo') == 'true' ? true : false;

    window.location.reload();

  }

  themeObj: any;
  layoutObj: any;
  publish() {
    this.themeObj = {
      "main_theme": this.favcolor,
      "left_theme": this.leftcolor,
      "right_theme": this.rightcolor,
      "header_theme": this.headercolor,
      "footer_theme": this.footercolor,
    }
    this.layoutObj = {
        "left_layout": this.leftLayout,
        "right_layout": this.rightLayout,
        "show_logo": this.showLogo,
        "show_leftmenu": this.showLeftMenu
    }

    this.sharedService.updateTheme(this.sharedService.themeID, this.themeObj).subscribe((data:any)=>{
      alert("Theme/Layout updated successfully")
      this.getThemes();
    });
    this.sharedService.updateLayout(this.sharedService.layoutID, this.layoutObj).subscribe((data:any)=>{
      // alert("Theme/Layout updated successfully")
      this.getLayout();
    })

  }

  themeInfo: any;
  getThemes() {
    this.sharedService.getTheme().subscribe((data: any) => {
      this.themeInfo = data?.themes[0];
      this.sharedService.themeID = this.themeInfo?._id;
      this.sharedService.layoutTheme = this.themeInfo?.main_theme;
      this.sharedService.leftTheme = this.themeInfo?.left_theme;
      this.sharedService.rightTheme = this.themeInfo?.right_theme;
      this.sharedService.footerTheme = this.themeInfo?.footer_theme;
      this.sharedService.headerTheme = this.themeInfo?.header_theme;
      this.headercolor = this.themeInfo?.header_theme;
      this.leftcolor = this.themeInfo?.left_theme;
      this.rightcolor = this.themeInfo?.right_theme;
      this.footercolor = this.themeInfo?.footer_theme;
    });
  }

  default() {
    if (!localStorage.getItem('layouttheme')) {
      // this.sharedService.layoutTheme = '#00000';
      this.favcolor = this.sharedService.layoutTheme;
    }
    else {
      // this.sharedService.layoutTheme = localStorage.getItem('layouttheme');
      this.favcolor = this.sharedService.layoutTheme;
    }

    if(!localStorage.getItem('selectfont')) {
      this.sharedService.selectFont = 'Arial';
      this.myFont = this.sharedService.selectFont;
    }
    else{
      this.sharedService.selectFont = localStorage.getItem('selectfont');
      this.myFont = this.sharedService.selectFont;
    }

    // if(!localStorage.getItem('footerLayout')){
    //   this.sharedService.footerLayout = false;
    //   this.footerLayout = this.sharedService.footerLayout;
    // }
    // else{
    //   this.sharedService.footerLayout = localStorage.getItem('footerLayout') == 'true' ? true : false;
    //   this.footerLayout = this.sharedService.footerLayout;
    // }

    if (!localStorage.getItem('leftLayout')) {
      this.sharedService.leftLayout = false;
      this.leftLayout = this.sharedService.leftLayout;
    }
    else {
      this.sharedService.leftLayout = localStorage.getItem('leftLayout') == 'true' ? true : false;
      this.leftLayout = this.sharedService.leftLayout;
    }

    if (!localStorage.getItem('rightLayout')) {
      this.sharedService.rightLayout = false;
      this.rightLayout = this.sharedService.rightLayout;
    }
    else {
      this.sharedService.rightLayout = localStorage.getItem('rightLayout') == 'true' ? true : false;
      this.rightLayout = this.sharedService.rightLayout;
    }

    if (!localStorage.getItem('showLeftMenu')) {
      this.sharedService.showLeftMenu = false;
      this.showLeftMenu = this.sharedService.showLeftMenu;
    }
    else {
      this.sharedService.showLeftMenu = localStorage.getItem('showLeftMenu') == 'true' ? true : false;
      this.showLeftMenu = this.sharedService.showLeftMenu;
    }

    if (!localStorage.getItem('showLogo')) {
      this.sharedService.showLogo = false;
      this.showLogo = this.sharedService.showLogo;
    }
    else {
      this.sharedService.showLogo = localStorage.getItem('showLogo') == 'true' ? true : false;
      this.showLogo = this.sharedService.showLogo;
    }

  }

  getLayout(){
    this.sharedService.getLayout().subscribe((data:any)=>{
      console.log(data);
      this.layoutInfo = data?.louts[0];
      this.sharedService.layoutID  = this.layoutInfo?._id
      this.sharedService.leftLayout = this.layoutInfo?.left_layout;
      this.sharedService.rightLayout = this.layoutInfo?.right_layout;
    })   
  }

  defaultTheme(){
    this.sharedService.leftTheme = "#000000";
    this.sharedService.rightTheme = "#000000";
    this.sharedService.headerTheme = "#000000";
    this.sharedService.footerTheme = "#000000";
    this.sharedService.layoutTheme = "#000000";
    this.favcolor = "#000000";
    this.headercolor = "#000000";
    this.footercolor = "#000000";
    this.leftcolor = "#000000";
    this.rightcolor = "#000000";
  }
}
