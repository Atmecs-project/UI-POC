import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { RightNavComponent } from './right-nav/right-nav.component';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 4ab1b680bddde2f17d1ed30db9ec4ea787338082

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent
=======
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    RightNavComponent
>>>>>>> 4ab1b680bddde2f17d1ed30db9ec4ea787338082
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
