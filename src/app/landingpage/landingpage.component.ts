import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  themeInfo: any;
  layoutInfo: any;
  emplist: any = [];
  constructor( public sharedService: SharedServiceService ) { }

  ngOnInit(): void {
    this.getTheme();
    this.getLayout();
    this.getEmployee();
  }

  getTheme(){
    this.sharedService.getTheme().subscribe((data:any) => {
      this.themeInfo = data?.themes[0];
      // console.log(this.themeInfo);
      this.sharedService.layoutTheme = this.themeInfo.main_theme;
      this.sharedService.leftTheme = this.themeInfo.left_theme;
      this.sharedService.rightTheme = this.themeInfo.right_theme;
      this.sharedService.footerTheme =  this.themeInfo.footer_theme;
      this.sharedService.headerTheme = this.themeInfo.header_theme;
    });
  }
  getLayout(){
    this.sharedService.getLayout().subscribe((data:any)=>{
      console.log(data);
      this.layoutInfo = data?.louts[0];
      this.sharedService.leftLayout = this.layoutInfo?.left_layout;
      this.sharedService.rightLayout = this.layoutInfo?.right_layout;
      this.sharedService.showLogo = this.layoutInfo?.show_logo;
      this.sharedService.showLeftMenu = this.layoutInfo?.show_leftmenu;
      this.sharedService.selectFont = this.layoutInfo?.font_family;
      this.sharedService.fontSize = this.layoutInfo?.font_size;
    })
  }

  getEmployee(){
    this.sharedService.employees().subscribe((data) => {
      this.emplist=data;
      console.log(this.emplist);
    });
  }

}
