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
  constructor( public sharedService: SharedServiceService){}
  ngOnInit(){
    this.sharedService.isLoggedIn = localStorage.getItem('logged') == 'true' ? true : false;

    if(!localStorage.getItem('layouttheme')){
      this.sharedService.layoutTheme = '#00000';
    }
    else{
      this.sharedService.layoutTheme = localStorage.getItem('layouttheme');
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
    }
    else{
      this.sharedService.leftLayout = localStorage.getItem('leftLayout') == 'true' ? true : false;
    }

    if(!localStorage.getItem('rightLayout')){
      this.sharedService.rightLayout = false;
    }
    else{
      this.sharedService.rightLayout = localStorage.getItem('rightLayout') == 'true' ? true : false;
    }

    if(!localStorage.getItem('showLeftMenu')){
      this.sharedService.showLeftMenu = false;
    }
    else{
      this.sharedService.showLeftMenu = localStorage.getItem('showLeftMenu') == 'true' ? true : false;
    }

    if(!localStorage.getItem('showLogo')){
      this.sharedService.showLogo = false;
    }
    else{
      this.sharedService.showLogo = localStorage.getItem('showLogo') == 'true' ? true : false;
    }
  }
}
